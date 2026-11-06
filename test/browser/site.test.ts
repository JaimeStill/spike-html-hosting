// The site's build, as Pages serves it: dist/ under the base, by the SDK's served(), Vite's
// preview, loaded in the pinned chrome-headless-shell. Each of the SDK's shell checks is a test on
// a fresh page of each page the root builds, by its URL apart from the base: the hand pages, the
// index at the base, the orientation brief by hand at briefs/orientation.html, and the sitrep
// entry under sitreps/, and the two trees' rendered pages, the charter at github/profile/ and the
// orientation brief at org/briefs/orientation.html, whose IMPORTANT alert is a callout. Every page
// sets its site nav's src to the root's sites.json under the base and fetches it there, and the
// index's list of sites is that list. Each orientation page links the other, and each hand
// diagram is an image named by its title and described by its desc. The crawl, from the hand index, checks
// every copied page of both trees and loads each hand page it reaches; it reaches exactly the
// root's three hand pages. Nothing here names the site: its base is package.json's name, and the
// list is public/sites.json.
// Adapted from spike-html-hosting-architecture (27d70e1): test/browser/site.test.ts, its checks
// the SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/browser/trees.test.ts, its shell checks on
// each page by its URL and its crawl of a root-style site, its pages the root's.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { after, before, describe, test } from "node:test";

import { launch, until } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Browser } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Server } from "@jaimestill/spike-html-apps-tooling/server.js";
import { crawl, shell } from "@jaimestill/spike-html-hosting-sdk/browser.js";
import { contentPages } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";
import { served } from "@jaimestill/spike-html-hosting-sdk/served.js";

const root = join(import.meta.dirname, "../..");

/** The root's hand pages, by their paths under the base, in the order the crawl reaches them from
 * the index's links. */
const hand = ["", "briefs/orientation.html", "sitreps/2026-11-06-spike-html-hosting.html"];

/** Each page the root builds, by its path under the base: the hand pages, then the rendered
 * pages. */
const pages = [...hand, "github/profile/", "org/briefs/orientation.html"];

/** The list of sites the root deploys, which every page's nav fetches. */
const sites = JSON.parse(readFileSync(join(root, "public/sites.json"), "utf8")) as {
  repository: string;
  label: string;
}[];

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

  test("the index lists every site sites.json lists, in its order, each at its base", async () => {
    const page = await browser.open("about:blank");
    try {
      await page.goto(server.origin);
      const listed = await page.evaluate(`[...document.querySelectorAll("main ul.sites > li > a")]
        .map((a) => ({ href: a.getAttribute("href"), label: a.textContent.trim() }))`);
      assert.deepEqual(
        listed,
        sites.map(({ repository, label }) => ({ href: `/${repository}/`, label })),
      );
    } finally {
      await page.close();
    }
  });

  test("the index lists its sitrep entries newest first", async () => {
    const page = await browser.open("about:blank");
    try {
      await page.goto(server.origin);
      const dates = (await page.evaluate(`[...document.querySelectorAll("main ol.sitreps > li")]
        .map((li) => li.querySelector("time").dateTime)`)) as string[];
      assert.ok(dates.length > 0, "the index lists a sitrep entry");
      assert.deepEqual(dates, dates.toSorted().reverse());
    } finally {
      await page.close();
    }
  });

  for (const path of pages) {
    test(`${path || "the hand index"}'s site nav fetches sites.json under the base`, async () => {
      const page = await browser.open("about:blank");
      try {
        await page.goto(`${server.origin}${path}`);
        const list = `${server.origin}sites.json`;
        assert.equal(
          await page.evaluate(`new URL(document.querySelector("sl-site-nav").getAttribute("src"),
            location.href).href`),
          list,
        );
        await until(page, `performance.getEntriesByName(${JSON.stringify(list)}).length > 0`);
      } finally {
        await page.close();
      }
    });
  }

  test("each orientation page links the other from its main", async () => {
    const forms = [
      ["briefs/orientation.html", "org/briefs/orientation.html"],
      ["org/briefs/orientation.html", "briefs/orientation.html"],
    ];
    for (const [from, to] of forms) {
      const page = await browser.open("about:blank");
      try {
        await page.goto(`${server.origin}${from}`);
        const links = (await page.evaluate(
          `[...document.querySelectorAll("main a[href]")].map((a) => a.href)`,
        )) as string[];
        assert.ok(links.includes(`${server.origin}${to}`), `${from} links ${to}`);
      } finally {
        await page.close();
      }
    }
  });

  test("the hand orientation page's diagrams are each an image named by its title and described by its desc", async () => {
    const page = await browser.open("about:blank");
    try {
      await page.goto(`${server.origin}briefs/orientation.html`);
      const { root: document } = await page.cdp("DOM.getDocument");
      const { nodeIds } = (await page.cdp("DOM.querySelectorAll", {
        nodeId: document.nodeId,
        selector: "main figure > svg",
      })) as { nodeIds: number[] };
      assert.ok(nodeIds.length > 0, "the page has a diagram");
      const texts = (await page.evaluate(`[...document.querySelectorAll("main figure > svg")]
        .map((svg) => ({
          name: svg.querySelector(":scope > title")?.textContent.replace(/\\s+/g, " ").trim(),
          description: svg.querySelector(":scope > desc")?.textContent.replace(/\\s+/g, " ").trim(),
          caption: svg.parentElement.querySelector(":scope > figcaption")?.textContent.trim() ?? "",
        }))`)) as { name?: string; description?: string; caption: string }[];
      for (const [i, nodeId] of nodeIds.entries()) {
        const { nodes } = (await page.cdp("Accessibility.getPartialAXTree", {
          nodeId,
          fetchRelatives: false,
        })) as {
          nodes: {
            role?: { value: string };
            name?: { value: string };
            description?: { value: string };
          }[];
        };
        const [node] = nodes;
        const { name, description, caption } = texts[i];
        assert.ok(name && description, `diagram ${i + 1} has a title and a desc`);
        assert.notEqual(caption, "", `diagram ${i + 1} has a caption`);
        assert.deepEqual(
          { role: node.role?.value, name: node.name?.value, description: node.description?.value },
          { role: "image", name, description },
        );
      }
    } finally {
      await page.close();
    }
  });

  test("the crawl checks every copied page of both trees, the hand pages loaded", async (t) => {
    const page = await browser.open("about:blank");
    try {
      const crawled = await crawl(page, server.origin, root);
      t.diagnostic(`${crawled.pages} pages, ${crawled.links} in-site links`);
      if (crawled.unreachable.length > 0) {
        t.diagnostic(`no link reaches ${crawled.unreachable.join(", ")}`);
      }
      assert.equal(crawled.pages, contentPages(root).length + crawled.hand.length);
      assert.deepEqual(crawled.hand, hand);
    } finally {
      await page.close();
    }
  });
});
