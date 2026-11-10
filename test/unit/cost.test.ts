// mise run cost's pure parts (scripts/cost-report.ts), offline: the median and max, the reading
// of a Pages run's log, on test/fixtures/cost/run.log, lines of the root's merge run 42848387666
// as gh run view --log printed them, its byte-order mark and color codes kept; the pin a pages.yml
// names and the runs at it, on test/fixtures/cost/runs.json, the architecture site's runs as the
// runs API listed them, one still running, three at v0.6.1, two at older pins; the run the live
// index's Last-Modified came from; which link is an in-site page; the kind of a response; the
// brotli weight; and the table's layout.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";
import { gzipSync } from "node:zlib";

import {
  brotli,
  duration,
  inSite,
  kB,
  kind,
  liveRun,
  max,
  median,
  parseLog,
  pin,
  pinnedRuns,
  siteTable,
  table,
  type ApiRun,
  type Response,
} from "../../scripts/cost-report.ts";

const fixtures = join(import.meta.dirname, "../fixtures/cost");
const PIN = "JaimeStill/spike-html-hosting-sdk/.github/workflows/site-pages.yml@v0.6.1";

describe("median and max", () => {
  test("the median of an odd count is its middle value, of any order", () => {
    assert.equal(median([5, 1, 3]), 3);
  });
  test("the median of an even count is the mean of its middle two", () => {
    assert.equal(median([4, 1, 3, 10]), 3.5);
  });
  test("leaves its input unsorted", () => {
    const values = [3, 1, 2];
    median(values);
    assert.deepEqual(values, [3, 1, 2]);
  });
  test("of nothing, each is NaN", () => {
    assert.ok(Number.isNaN(median([])));
    assert.ok(Number.isNaN(max([])));
  });
  test("max is the largest", () => {
    assert.equal(max([2, 9, 4]), 9);
  });
});

describe("parseLog on the root's merge run", () => {
  const log = parseLog(readFileSync(join(fixtures, "run.log"), "utf8"));

  test("reads Vite's built in, in ms", () => {
    assert.equal(log.built, 419);
  });
  test("times the check step from its group to the next step's", () => {
    // 15:49:42.9998785 to 15:50:15.4857905, to the ms Date.parse keeps.
    assert.equal(log.check, 32_486);
  });
  test("reads deploy-pages' start and its reported success", () => {
    assert.equal(log.deployStarted, "2026-11-10T15:50:16.6028730Z");
    assert.equal(log.deployed, "2026-11-10T15:51:21.3957394Z");
  });
  test("reads a built in given in seconds", () => {
    const line =
      "pages / deploy\tUNKNOWN STEP\t2026-11-10T15:45:19.7589585Z ^[[32m✓ built in 2.70s^[[39m";
    assert.equal(parseLog(line).built, 2700);
  });
  test("a log without them reads null for each", () => {
    assert.deepEqual(parseLog("pages / deploy\tUNKNOWN STEP\t2026-11-10T15:45:19.7589585Z hello"), {
      built: null,
      check: null,
      deployStarted: null,
      deployed: null,
    });
  });
});

describe("the runs at the pin", () => {
  const { workflow_runs: runs } = JSON.parse(readFileSync(join(fixtures, "runs.json"), "utf8")) as {
    workflow_runs: ApiRun[];
  };

  test("pin reads the reusable workflow a pages.yml's uses: line calls", () => {
    const yml = `jobs:\n  pages:\n    uses: ${PIN}\n`;
    assert.equal(pin(yml), PIN);
    assert.equal(pin("jobs:\n  pages:\n    runs-on: ubuntu-latest\n"), null);
  });
  test("are the completed, successful runs at the pin, oldest first, of either event", () => {
    assert.deepEqual(
      pinnedRuns(runs, PIN).map(({ id, event }) => [id, event]),
      [
        [42846195022, "push"],
        [42848878955, "workflow_dispatch"],
        [42849244179, "workflow_dispatch"],
      ],
    );
  });
  test("leave out a failed run", () => {
    const failed = runs.map((run) =>
      run.id === 42848878955 ? { ...run, conclusion: "failure" } : run,
    );
    assert.deepEqual(
      pinnedRuns(failed, PIN).map(({ id }) => id),
      [42846195022, 42849244179],
    );
  });
  test("carry the run's creation and commit", () => {
    assert.deepEqual(pinnedRuns(runs, PIN)[0], {
      id: 42846195022,
      event: "push",
      created: "2026-11-10T15:36:58Z",
      sha: "04d2271ff4ce94a3ba4f96c198b1c8cc88e760ed",
    });
  });
});

describe("liveRun", () => {
  // The root's runs 42849283631 and 42849473286: deploy-pages started 15:55:24.99 and 15:56:30.14,
  // and reported success at 15:55:30.71 and 15:56:36.33.
  const at = (deployStarted: string | null, deployed: string | null) => ({
    built: null,
    check: null,
    deployStarted,
    deployed,
  });
  const logs = [
    at("2026-11-10T15:55:24.9865774Z", "2026-11-10T15:55:30.7058515Z"),
    at("2026-11-10T15:56:30.1403549Z", "2026-11-10T15:56:36.3312558Z"),
  ];
  test("is the run whose deploy the Last-Modified falls in", () => {
    assert.equal(liveRun("Tue, 10 Nov 2026 15:56:32 GMT", logs), 1);
  });
  test("counts the second a deploy started in", () => {
    assert.equal(liveRun("Tue, 10 Nov 2026 15:56:30 GMT", logs), 1);
  });
  test("keeps a Last-Modified that came after the reported success with that deploy", () => {
    // Seen live: 15:55:58, 27 s after the first deploy's success, before the second's start.
    assert.equal(liveRun("Tue, 10 Nov 2026 15:55:58 GMT", logs), 0);
  });
  test("is -1 before every deploy, and skips a run with none", () => {
    assert.equal(liveRun("Tue, 10 Nov 2026 15:55:23 GMT", logs), -1);
    assert.equal(liveRun("Tue, 10 Nov 2026 15:56:32 GMT", [logs[0], at(null, null)]), 0);
  });
});

describe("inSite", () => {
  const site = "https://example.github.io/site/";
  test("a page under the site, without its fragment or query", () => {
    assert.equal(inSite(`${site}docs/a.html#part`, site), `${site}docs/a.html`);
    assert.equal(inSite("docs/?x=1", site), `${site}docs/`);
  });
  test("a directory's index.html is the directory", () => {
    assert.equal(inSite(`${site}docs/index.html`, site), `${site}docs/`);
  });
  test("not a link under another base, off the host, or to a file no page is", () => {
    assert.equal(inSite("/site-architecture/", site), null);
    assert.equal(inSite("https://github.com/x/", site), null);
    assert.equal(inSite(`${site}assets/index.js`, site), null);
  });
});

describe("weights", () => {
  test("kind sums CDP's resource types", () => {
    assert.deepEqual(["Document", "Stylesheet", "Script", "Image", "Media", "Fetch"].map(kind), [
      "html",
      "css",
      "js",
      "image",
      "media",
      "other",
    ]);
  });
  test("brotli 11 compresses text below gzip", () => {
    const body = Buffer.from("<p>a page of the site</p>\n".repeat(400));
    assert.ok(brotli(body) < gzipSync(body).length);
    assert.ok(brotli(body) > 0);
  });
  test("kB and duration", () => {
    assert.equal(kB(34_512), "34.5 kB");
    assert.equal(kB(NaN), "-");
    assert.equal(duration(419), "0.42 s");
    assert.equal(duration(32_486), "32.5 s");
    assert.equal(duration(112_000), "1 m 52 s");
    assert.equal(duration(null), "-");
  });
});

describe("the tables", () => {
  test("pads each section's columns, the first left and the rest right", () => {
    assert.equal(
      table("site", [
        {
          caption: "c",
          header: ["page", "kB"],
          rows: [
            ["./", "1.0"],
            ["docs/", "12.5"],
          ],
          footer: [["max", "12.5"]],
        },
      ]),
      [
        "site",
        "====",
        "",
        "c",
        "page     kB",
        "-----  ----",
        "./      1.0",
        "docs/  12.5",
        "-----  ----",
        "max    12.5",
        "",
      ].join("\n"),
    );
  });

  test("a site's table sums each page and marks the run its live index came from", () => {
    const response = (type: string, served: number, decoded: number, brotli: number): Response => ({
      url: `https://example.github.io/site/${type}`,
      type,
      status: 200,
      encoding: "gzip",
      served,
      decoded,
      brotli,
    });
    const out = siteTable({
      name: "site",
      url: "https://example.github.io/site/",
      pin: PIN,
      pages: [
        {
          path: "",
          responses: [response("Document", 1000, 3000, 900), response("Script", 2000, 6000, 1800)],
        },
        { path: "a.html", responses: [response("Document", 3000, 9000, 2700)] },
      ],
      runs: [
        {
          run: { id: 1, event: "push", created: "2026-11-10T15:49:29Z", sha: "a" },
          log: parseLog(readFileSync(join(fixtures, "run.log"), "utf8")),
        },
      ],
      lastModified: "Tue, 10 Nov 2026 15:51:16 GMT",
    });
    const lines = out.split("\n");
    assert.match(out, /^\.\/\s+2\s+9\.0 kB\s+3\.0 kB\s+2\.7 kB$/m);
    assert.match(out, /^median\s+1\.5\s+9\.0 kB\s+3\.0 kB\s+2\.7 kB$/m);
    assert.match(out, /^html\s+1\s+gzip\s+2\.0 kB\s+3\.0 kB\s+1\.8 kB\s+2\.7 kB$/m);
    assert.match(
      out,
      /^1\s+push\s+2026-11-10T15:49:29Z\s+0\.42 s\s+32\.5 s\s+1 m 52 s\s+yes, -5 s$/m,
    );
    assert.ok(lines.some((line) => line.startsWith("js ")));
    assert.ok(!lines.some((line) => line.startsWith("image ")), "a kind no page loads has no row");
  });
});
