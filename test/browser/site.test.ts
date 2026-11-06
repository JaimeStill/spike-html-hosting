// The site's build, as Pages serves it: dist/ under the base, by the SDK's served(), Vite's
// preview, loaded in the pinned chrome-headless-shell. Each of the SDK's shell checks is a test on
// a fresh page of each page the root builds, by its URL apart from the base: the hand index at the
// base, and the two trees' rendered pages, the charter at github/profile/ and the orientation
// brief at org/briefs/orientation.html, whose IMPORTANT alert is a callout. The crawl, from the
// hand index, checks every copied page of both trees and loads each hand page it reaches; it
// reaches exactly the hand index, the one hand page the root builds. Nothing here names the site:
// its base is package.json's name.
// Adapted from spike-html-hosting-architecture (27d70e1): test/browser/site.test.ts, its checks
// the SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/browser/trees.test.ts, its shell checks on
// each page by its URL and its crawl of a root-style site, its pages the root's.

import assert from "node:assert/strict";
import { join } from "node:path";
import { after, before, describe, test } from "node:test";

import { launch } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Browser } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Server } from "@jaimestill/spike-html-apps-tooling/server.js";
import { crawl, shell } from "@jaimestill/spike-html-hosting-sdk/browser.js";
import { contentPages } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";
import { served } from "@jaimestill/spike-html-hosting-sdk/served.js";

const root = join(import.meta.dirname, "../..");

/** Each page the root builds, by its path under the base: the hand index, then the rendered
 * pages. */
const pages = ["", "github/profile/", "org/briefs/orientation.html"];

let server: Server;
let browser: Browser;

before(async () => {
  server = await served(root);
  browser = await launch();
});
after(async () => {
  await browser?.close();
  await server?.stop();
});

describe("the site under its base", () => {
  for (const path of pages) {
    describe(`the shell checks on ${path || "the hand index"}`, () => {
      for (const [name, check] of Object.entries(shell)) {
        test(name, async () => {
          const page = await browser.open("about:blank");
          try {
            await check(page, server.origin, `${server.origin}${path}`);
          } finally {
            await page.close();
          }
        });
      }
    });
  }

  test("the orientation brief's IMPORTANT alert is a callout", async () => {
    const page = await browser.open("about:blank");
    try {
      await page.goto(`${server.origin}org/briefs/orientation.html`);
      const callout = await page.evaluate(`(() => {
        const alert = document.querySelector("main .markdown-alert.markdown-alert-important");
        return alert && {
          title: alert.querySelector(".markdown-alert-title")?.textContent.trim(),
          rule: getComputedStyle(alert).borderInlineStartStyle,
        };
      })()`);
      assert.deepEqual(callout, { title: "Important", rule: "solid" });
    } finally {
      await page.close();
    }
  });

  test("the crawl checks every copied page of both trees, the hand index loaded", async (t) => {
    const page = await browser.open("about:blank");
    try {
      const crawled = await crawl(page, server.origin, root);
      t.diagnostic(`${crawled.pages} pages, ${crawled.links} in-site links`);
      if (crawled.unreachable.length > 0) {
        t.diagnostic(`no link reaches ${crawled.unreachable.join(", ")}`);
      }
      assert.equal(crawled.pages, contentPages(root).length + crawled.hand.length);
      assert.deepEqual(crawled.hand, [""]);
    } finally {
      await page.close();
    }
  });
});
