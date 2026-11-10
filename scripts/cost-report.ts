// The pure parts of mise run cost (scripts/cost.ts): the median, the reading of a Pages run's log
// and of the runs at a site's current pin, which in-site link is a page, the weighing of a body
// with brotli, and the table each site prints. Nothing here reads the network; the unit tier
// (test/unit/cost.test.ts) runs each on fixtures of gh's output and a run's log.

import { brotliCompressSync, constants } from "node:zlib";

/** The median of the values, the mean of the middle two when they are even in number; NaN when
 * there are none. */
export function median(values: number[]): number {
  if (values.length === 0) return NaN;
  const sorted = values.toSorted((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

/** The largest of the values; NaN when there are none. */
export function max(values: number[]): number {
  return values.length === 0 ? NaN : Math.max(...values);
}

/** The body's size compressed with brotli at quality 11, node:zlib's, the most a static host could
 * serve it at. */
export function brotli(body: Buffer): number {
  return brotliCompressSync(body, {
    params: {
      [constants.BROTLI_PARAM_QUALITY]: 11,
      [constants.BROTLI_PARAM_SIZE_HINT]: body.length,
    },
  }).length;
}

/** What one Pages run's log tells: Vite's "built in" time in the check, the check step's
 * duration, both in ms, and when its deploy step started and reported success, as ISO times; each
 * null when the log doesn't hold it. */
export interface RunLog {
  built: number | null;
  check: number | null;
  deployStarted: string | null;
  deployed: string | null;
}

/** ANSI color codes, as the runner writes them or as gh's --log renders the escape, ^[. */
// The escape, a control character, is what the pattern matches.
// eslint-disable-next-line no-control-regex
const ANSI = /(?:\x1b|\^\[)\[[0-9;]*m/g;

/**
 * Reads a run's log as gh run view --log prints it, each line its job, its step, and the runner's
 * timestamp before the message, tab-separated. The check step is the span from its group's
 * "Run mise run check" line to the next step's "Run" group line; Vite's first "built in" line is
 * the check's build; the deploy is deploy-pages' group line through its "Reported success!".
 */
export function parseLog(log: string): RunLog {
  const lines = log.split("\n").flatMap((line) => {
    // The log's first line opens with a byte-order mark.
    const rest = line
      .split("\t")
      .slice(2)
      .join("\t")
      .replace(/^\uFEFF/, "");
    const match = /^(\d{4}-\d\d-\d\dT[\d:.]+Z) ?(.*)$/.exec(rest);
    return match ? [{ time: match[1], message: match[2].replace(ANSI, "") }] : [];
  });
  const at = (test: (message: string) => boolean, from = 0) => {
    const index = lines.findIndex((line, i) => i >= from && test(line.message));
    return index < 0 ? null : { index, time: lines[index].time };
  };
  const step = (name: string) => (message: string) => message === `##[group]Run ${name}`;
  const checkStart = at(step("mise run check"));
  const checkEnd =
    checkStart && at((message) => message.startsWith("##[group]Run "), checkStart.index + 1);
  const built = lines
    .map(({ message }) => /built in ([\d.]+)(ms|s)\b/.exec(message))
    .find((match) => match !== null);
  const deployStart = at((message) => message.startsWith("##[group]Run actions/deploy-pages@"));
  const deployed =
    deployStart && at((message) => message === "Reported success!", deployStart.index);
  return {
    built: built ? Number(built[1]) * (built[2] === "s" ? 1000 : 1) : null,
    check: checkStart && checkEnd ? Date.parse(checkEnd.time) - Date.parse(checkStart.time) : null,
    deployStarted: deployStart?.time ?? null,
    deployed: deployed?.time ?? null,
  };
}

/** The reusable workflow a pages.yml calls, as its uses: line names it, path and ref: the site's
 * current pin, which the runs API reports for each run as a referenced workflow's path. */
export function pin(pagesYml: string): string | null {
  return /^\s*uses:\s*(\S+@\S+)\s*$/m.exec(pagesYml)?.[1] ?? null;
}

/** A Pages run, as the runs API lists it: the fields cost reads. */
export interface ApiRun {
  id: number;
  event: string;
  status: string;
  conclusion: string | null;
  created_at: string;
  head_sha: string;
  referenced_workflows?: { path: string }[];
}

/** A Pages run cost measures. */
export interface Run {
  id: number;
  event: string;
  created: string;
  sha: string;
}

/**
 * The runs at the pin, those since the site moved to it: the successful, completed runs, of any
 * event, that called the reusable workflow at the pin, oldest first. A run at an older pin, one
 * still running, and one that failed are left out.
 */
export function pinnedRuns(runs: ApiRun[], current: string): Run[] {
  return runs
    .filter(
      (run) =>
        run.status === "completed" &&
        run.conclusion === "success" &&
        (run.referenced_workflows ?? []).some(({ path }) => path === current),
    )
    .map((run) => ({ id: run.id, event: run.event, created: run.created_at, sha: run.head_sha }))
    .toSorted((a, b) => Date.parse(a.created) - Date.parse(b.created));
}

/** Whether the live index's Last-Modified, an HTTP date to the second, falls in the run's deploy,
 * from its deploy step's start, to the second, through its reported success: the deploy that put
 * the index there. */
export function confirms(lastModified: string, { deployStarted, deployed }: RunLog): boolean {
  if (!deployStarted || !deployed) return false;
  const live = Date.parse(lastModified);
  return (
    live >= Math.floor(Date.parse(deployStarted) / 1000) * 1000 && live <= Date.parse(deployed)
  );
}

/** The page an in-site link names, as a URL without its fragment or query, a directory's
 * index.html as the directory; null for a link off the site, under another base, or to a file no
 * page is, which ends in neither / nor .html. */
export function inSite(href: string, site: string): string | null {
  const url = new URL(href, site);
  url.hash = "";
  url.search = "";
  const page = url.href.replace(/\/index\.html$/, "/");
  return page.startsWith(site) && /(\/|\.html)$/.test(page) ? page : null;
}

/** One response a page loaded, weighed: the CDP resource type that requested it, the encoding
 * Pages served it with, its body as served, decoded, and at brotli 11, in bytes. */
export interface Response {
  url: string;
  type: string;
  status: number;
  encoding: string;
  served: number;
  decoded: number;
  brotli: number;
}

/** A page of a site, by its path under the site, and every response it loaded. */
export interface Weighed {
  path: string;
  responses: Response[];
}

/** The kinds a page's responses are summed by, from CDP's resource type. */
export const kinds = ["html", "css", "js", "image", "media", "other"] as const;

/** The kind of a CDP resource type. */
export function kind(type: string): (typeof kinds)[number] {
  return (
    (
      {
        Document: "html",
        Stylesheet: "css",
        Script: "js",
        Image: "image",
        Media: "media",
      } as const
    )[type] ?? "other"
  );
}

/** A table's section: a caption line, a header row, its rows, and its footer rows below a rule. The
 * first column is left-aligned, the rest right-aligned. */
export interface Section {
  caption: string;
  header: string[];
  rows: string[][];
  footer?: string[][];
}

/** The table, its title line and each section, columns padded to their widest cell. */
export function table(title: string, sections: Section[]): string {
  const out = [title, "=".repeat(title.length)];
  for (const { caption, header, rows, footer = [] } of sections) {
    const all = [header, ...rows, ...footer];
    const widths = header.map((_, i) => Math.max(...all.map((row) => (row[i] ?? "").length)));
    const line = (row: string[]) =>
      row
        .map((cell, i) => (i === 0 ? cell.padEnd(widths[i]) : cell.padStart(widths[i])))
        .join("  ")
        .trimEnd();
    const rule = widths.map((width) => "-".repeat(width)).join("  ");
    out.push("", caption, line(header), rule, ...rows.map(line));
    if (footer.length > 0) out.push(rule, ...footer.map(line));
  }
  return `${out.join("\n")}\n`;
}

/** Bytes in kB, 1000 bytes, to one place. */
export function kB(bytes: number): string {
  return Number.isNaN(bytes) ? "-" : `${(bytes / 1000).toFixed(1)} kB`;
}

/** A duration in ms as seconds, to two places below 10 s, one below 100 s, and as minutes and
 * seconds from there. */
export function duration(ms: number | null): string {
  if (ms === null || Number.isNaN(ms)) return "-";
  const s = ms / 1000;
  if (s < 10) return `${s.toFixed(2)} s`;
  if (s < 100) return `${s.toFixed(1)} s`;
  return `${Math.floor(s / 60)} m ${String(Math.round(s % 60)).padStart(2, "0")} s`;
}

/** What cost read of a site: its name, live URL, pin, the pages weighed, the runs at the pin and
 * their logs, and its live index's Last-Modified. */
export interface Site {
  name: string;
  url: string;
  pin: string;
  pages: Weighed[];
  runs: { run: Run; log: RunLog }[];
  lastModified: string | null;
}

/** The site's table: each page's weight, the median and max page, the per-page weight of each
 * kind of response, and each Pages run at the pin, its build, check, and push-to-live, the time
 * from its creation to its deploy's reported success, with the run whose deploy the live index's
 * Last-Modified falls in marked. */
export function siteTable(site: Site): string {
  const totals = site.pages.map(({ path, responses }) => {
    const sum = (key: "served" | "decoded" | "brotli") =>
      responses.reduce((total, response) => total + response[key], 0);
    return {
      path,
      requests: responses.length,
      decoded: sum("decoded"),
      served: sum("served"),
      brotli: sum("brotli"),
    };
  });
  const summary = (name: string, of: (values: number[]) => number) => [
    name,
    String(of(totals.map(({ requests }) => requests))),
    kB(of(totals.map(({ decoded }) => decoded))),
    kB(of(totals.map(({ served }) => served))),
    kB(of(totals.map(({ brotli }) => brotli))),
  ];
  const byKind = kinds.flatMap((name) => {
    const per = site.pages.map(({ responses }) =>
      responses.filter(({ type }) => kind(type) === name),
    );
    if (per.every((responses) => responses.length === 0)) return [];
    const sums = (key: "served" | "brotli") =>
      per.map((responses) => responses.reduce((total, response) => total + response[key], 0));
    const encodings = [...new Set(per.flat().map(({ encoding }) => encoding))]
      .toSorted()
      .join(", ");
    return [
      [
        name,
        String(median(per.map((responses) => responses.length))),
        encodings,
        kB(median(sums("served"))),
        kB(max(sums("served"))),
        kB(median(sums("brotli"))),
        kB(max(sums("brotli"))),
      ],
    ];
  });
  const live = site.runs.find(
    ({ log }) => site.lastModified !== null && confirms(site.lastModified, log),
  );
  const runs = site.runs.map(({ run, log }) => ({
    run,
    log,
    toLive: log.deployed ? Date.parse(log.deployed) - Date.parse(run.created) : null,
  }));
  const timed = (
    of: (values: number[]) => number,
    key: (r: (typeof runs)[number]) => number | null,
  ) => duration(of(runs.flatMap((r) => (key(r) === null ? [] : [key(r) as number]))));
  const runSummary = (name: string, of: (values: number[]) => number) => [
    name,
    "",
    "",
    timed(of, ({ log }) => log.built),
    timed(of, ({ log }) => log.check),
    timed(of, ({ toLive }) => toLive),
    "",
  ];
  return table(`${site.name}  ${site.url}`, [
    {
      caption: `Page weight: every response each of its ${totals.length} pages loads, cache off; gzip as Pages served it, brotli 11 over the decoded body`,
      header: ["page", "requests", "decoded", "gzip served", "brotli 11"],
      rows: totals.map(({ path, requests, decoded, served, brotli }) => [
        path || "./",
        String(requests),
        kB(decoded),
        kB(served),
        kB(brotli),
      ]),
      footer: [summary("median", median), summary("max", max)],
    },
    {
      caption:
        "By kind, per page: the median page's requests, and each kind's weight on the median and the max page",
      header: [
        "kind",
        "requests",
        "encoding",
        "served median",
        "served max",
        "brotli median",
        "brotli max",
      ],
      rows: byKind,
    },
    {
      caption: `Pages runs at ${site.pin}: push-to-live from the run's creation to its deploy's reported success; live, the run whose deploy the index's Last-Modified (${site.lastModified ?? "none"}) falls in`,
      header: ["run", "event", "created", "built in", "check step", "push-to-live", "live"],
      rows: runs.map(({ run, log, toLive }) => [
        String(run.id),
        run.event,
        run.created,
        duration(log.built),
        duration(log.check),
        duration(toLive),
        run === live?.run ? "yes" : "",
      ]),
      footer: [runSummary("median", median), runSummary("max", max)],
    },
  ]);
}
