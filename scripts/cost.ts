// mise run cost: what each site the root deploys costs, read from the live sites and their Pages
// runs; it reads the network, writes nothing, and is no part of the check. One table per site, in
// public/sites.json's order (cost-report.ts formats it):
// - Page weight. Each page is loaded in the pinned chrome-headless-shell, by
//   spike-html-apps-tooling's launch(), whose browser resolves no name but the loopback address, so
//   that no test ever reads the network. Here the Fetch domain pauses every request the page makes
//   and this script makes it instead, to the live site, with the Accept-Encoding the browser sends,
//   and fulfills it with the decoded body: the page loads what it would, and each response is
//   weighed as Pages served it, its raw encoded bytes, then decoded, then at brotli 11. The cache
//   is off, so each page weighs as a first visit. The pages are the crawl of the site's in-site
//   links from its live index: on the architecture and sqlate sites the site index every page
//   carries lists them all; on the root, a hand index, its links reach its hand pages and its two
//   trees' pages, whose own links reach the rest. Nothing names a page.
// - Build time and push-to-live, from the site's Pages runs at its current pin, the reusable
//   workflow its pages.yml on main calls (the runs API reports each run's), each run's log by gh
//   run view --log: Vite's "built in", the check step, and the time from the run's creation to
//   deploy-pages' "Reported success!". The run the live index's Last-Modified came from, the last
//   whose deploy started by then, is marked live. The dispatched runs are made by hand (gh
//   workflow run pages.yml); this only reads them.
// gh, authenticated, reads the repositories: their owner is the root's, each site's live URL its
// Pages html_url.

import { execFile } from "node:child_process";
import { readFileSync } from "node:fs";
import { request } from "node:https";
import { join } from "node:path";
import { promisify } from "node:util";
import { brotliDecompressSync, gunzipSync, inflateSync, zstdDecompressSync } from "node:zlib";

import { launch } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Browser, Page } from "@jaimestill/spike-html-apps-tooling/browser.js";

import {
  brotli,
  inSite,
  parseLog,
  pin,
  pinnedRuns,
  siteTable,
  type ApiRun,
  type Response,
  type Site,
  type Weighed,
} from "./cost-report.ts";

const root = join(import.meta.dirname, "..");

/** The encodings the browser accepts, which Pages chooses among. */
const ACCEPT_ENCODING = "gzip, deflate, br, zstd";

/** How long a page must make no request, after its load event, for its load to count as done; and
 * the most it waits for that. */
const QUIET = 750;
const SETTLE = 15_000;

const run = promisify(execFile);

/** gh's output for the arguments, run in the root. */
async function gh(...args: string[]): Promise<string> {
  const { stdout } = await run("gh", args, { cwd: root, maxBuffer: 256 * 1024 * 1024 });
  return stdout;
}

/** The URL's response as the host served it, its body undecoded. */
function fetchRaw(
  url: string,
  method: string,
  headers: Record<string, string>,
): Promise<{ status: number; headers: [string, string][]; body: Buffer }> {
  return new Promise((resolve, reject) => {
    const req = request(url, { method, headers }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => chunks.push(chunk));
      res.on("end", () => {
        const pairs: [string, string][] = [];
        for (let i = 0; i < res.rawHeaders.length; i += 2)
          pairs.push([res.rawHeaders[i], res.rawHeaders[i + 1]]);
        resolve({ status: res.statusCode ?? 0, headers: pairs, body: Buffer.concat(chunks) });
      });
      res.on("error", reject);
    });
    req.on("error", reject);
    req.end();
  });
}

/** The body decoded from the Content-Encoding it was served with. */
function decode(body: Buffer, encoding: string): Buffer {
  switch (encoding) {
    case "gzip":
    case "x-gzip":
      return gunzipSync(body);
    case "br":
      return brotliDecompressSync(body);
    case "deflate":
      return inflateSync(body);
    case "zstd":
      return zstdDecompressSync(body);
    default:
      return body;
  }
}

/** The headers a fulfilled response carries: the served ones, but for those of its encoding and
 * length, since the browser gets the decoded body. */
const DROPPED = new Set(["content-encoding", "content-length", "transfer-encoding"]);

/** A page that weighs every response it loads: each request the page makes is made here, against
 * the live host, and fulfilled. load(url) navigates and resolves, once the page is quiet, to its
 * responses and the in-site links it holds. */
async function weigher(browser: Browser): Promise<{
  page: Page;
  load: (url: string) => Promise<{ responses: Response[]; links: string[] }>;
}> {
  const page = await browser.open("about:blank");
  let responses: Response[] = [];
  let pending = 0;
  let last = performance.now();
  const failures: string[] = [];
  page.on("Fetch.requestPaused", (params) => {
    const {
      requestId,
      request: req,
      resourceType,
    } = params as {
      requestId: string;
      request: { url: string; method: string; headers: Record<string, string> };
      resourceType: string;
    };
    if (!/^https?:/.test(req.url)) {
      page.cdp("Fetch.continueRequest", { requestId }).catch(() => {});
      return;
    }
    pending++;
    last = performance.now();
    const headers: Record<string, string> = { ...req.headers, "Accept-Encoding": ACCEPT_ENCODING };
    void (async () => {
      try {
        const served = await fetchRaw(req.url, req.method, headers);
        const encoding =
          served.headers
            .find(([name]) => name.toLowerCase() === "content-encoding")?.[1]
            .toLowerCase() ?? "identity";
        const body = decode(served.body, encoding);
        responses.push({
          url: req.url,
          type: resourceType,
          status: served.status,
          encoding,
          served: served.body.length,
          decoded: body.length,
          brotli: body.length === 0 ? 0 : brotli(body),
        });
        await page.cdp("Fetch.fulfillRequest", {
          requestId,
          responseCode: served.status,
          responseHeaders: served.headers
            .filter(([name]) => !DROPPED.has(name.toLowerCase()))
            .map(([name, value]) => ({ name, value })),
          body: body.toString("base64"),
        });
      } catch (error) {
        failures.push(`${req.url}: ${(error as Error).message}`);
        await page.cdp("Fetch.failRequest", { requestId, errorReason: "Failed" }).catch(() => {});
      } finally {
        pending--;
        last = performance.now();
      }
    })();
  });
  await page.cdp("Network.enable");
  await page.cdp("Network.setCacheDisabled", { cacheDisabled: true });
  await page.cdp("Fetch.enable", { patterns: [{ urlPattern: "*", requestStage: "Request" }] });
  const load = async (url: string) => {
    responses = [];
    failures.length = 0;
    await page.goto(url);
    const deadline = performance.now() + SETTLE;
    while ((pending > 0 || performance.now() - last < QUIET) && performance.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    if (failures.length > 0) throw new Error(`${url}: requests failed\n${failures.join("\n")}`);
    const links = (await page.evaluate(
      `[...document.querySelectorAll("a[href]")].map((a) => a.href)`,
    )) as string[];
    return { responses: responses.toSorted((a, b) => a.url.localeCompare(b.url)), links };
  };
  return { page, load };
}

/** Every page of the site at url, by the crawl of its in-site links from its index, weighed. */
async function weigh(browser: Browser, url: string): Promise<Weighed[]> {
  const { page, load } = await weigher(browser);
  try {
    const weighed: Weighed[] = [];
    const seen = new Set([url]);
    const queue = [url];
    for (let next = queue.shift(); next !== undefined; next = queue.shift()) {
      const { responses, links } = await load(next);
      weighed.push({ path: next.slice(url.length), responses });
      for (const link of links) {
        const page = inSite(link, url);
        if (page !== null && !seen.has(page)) {
          seen.add(page);
          queue.push(page);
        }
      }
    }
    return weighed;
  } finally {
    await page.close();
  }
}

/** How many times the live index's Last-Modified is asked. */
const ASKS = 5;

/** The live index's Last-Modified, the newest of ASKS answers, each asked past the CDN's cache:
 * Pages' CDN answers from several nodes, and one can serve the index of a deploy before the
 * latest for minutes after it, no-cache or not. */
async function lastModified(url: string): Promise<string | null> {
  const dates: string[] = [];
  for (let i = 0; i < ASKS; i++) {
    const { headers } = await fetchRaw(url, "HEAD", { "Cache-Control": "no-cache" });
    const date = headers.find(([name]) => name.toLowerCase() === "last-modified")?.[1];
    if (date !== undefined) dates.push(date);
  }
  return dates.toSorted((a, b) => Date.parse(b) - Date.parse(a))[0] ?? null;
}

/** The site's runs at its pin, each with its log read. */
async function runs(repo: string): Promise<Pick<Site, "pin" | "runs">> {
  const yml = await gh(
    "api",
    "-H",
    "Accept: application/vnd.github.raw",
    `repos/${repo}/contents/.github/workflows/pages.yml`,
  );
  const current = pin(yml);
  if (current === null) throw new Error(`${repo}: its pages.yml names no reusable workflow`);
  const listed = JSON.parse(
    await gh("api", `repos/${repo}/actions/workflows/pages.yml/runs?per_page=100`),
  ) as {
    workflow_runs: ApiRun[];
  };
  const pinned = pinnedRuns(listed.workflow_runs, current);
  return {
    pin: current,
    runs: await Promise.all(
      pinned.map(async (run) => ({
        run,
        log: parseLog(await gh("run", "view", String(run.id), "--log", "-R", repo)),
      })),
    ),
  };
}

const sites = JSON.parse(readFileSync(join(root, "public/sites.json"), "utf8")) as {
  repository: string;
}[];
const owner = (await gh("repo", "view", "--json", "owner", "--jq", ".owner.login")).trim();
const listed = await Promise.all(
  sites.map(async ({ repository }) => {
    const repo = `${owner}/${repository}`;
    const url = (await gh("api", `repos/${repo}/pages`, "--jq", ".html_url")).trim();
    return { name: repository, repo, url: url.endsWith("/") ? url : `${url}/` };
  }),
);

// The runs and the live headers are read beside the browser, which weighs one site at a time.
const read = Promise.all(
  listed.map(async ({ repo, url }) => ({
    ...(await runs(repo)),
    lastModified: await lastModified(url),
  })),
);
const browser = await launch();
const weights: Weighed[][] = [];
try {
  for (const { url } of listed) weights.push(await weigh(browser, url));
} finally {
  await browser.close();
}
const ran = await read;

process.stdout.write(
  listed
    .map(({ name, url }, i) => siteTable({ name, url, pages: weights[i], ...ran[i] }))
    .join("\n"),
);
