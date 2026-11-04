// The site's build, as Pages serves it: dist/ under the base, by Vite's preview, loaded in the
// pinned chrome-headless-shell. The page is the site's index.html, its entry render-blocking. The
// page's button opens the theme menu, whose CSS module script the build rewrote, so its sheet is
// adopted with no stylesheet fetched for it; and every request the page makes resolves under the
// base, with none failed. T opens the menu too, through keys.js, and stepping the color, space, and
// type rows each to a profile past its default, which the full entry registers, sets that facet's
// attribute on the root. In a 1600px viewport, the site's layout holds main to a reading width,
// centered. Nothing here names a site: a site that copies this layer changes only package.json's
// name and index.html's page text, and this file not at all.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { after, before, describe, test } from "node:test";

import { launch, until } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type { Browser, Page } from "@jaimestill/spike-html-apps-tooling/browser.js";
import { freePort, start } from "@jaimestill/spike-html-apps-tooling/process.js";
import type { Started } from "@jaimestill/spike-html-apps-tooling/process.js";

import { base } from "../../vite.config.ts";

const root = join(import.meta.dirname, "../..");

/** The page's title as the site's index.html writes it, which the built page must carry. */
const title = /<title>([^<]*)<\/title>/.exec(readFileSync(join(root, "index.html"), "utf8"))?.[1];

let preview: Started;
let origin: string;
let browser: Browser;

before(async () => {
  const port = await freePort();
  origin = `http://127.0.0.1:${port}`;
  preview = await start(
    join(root, "node_modules", ".bin", "vite"),
    ["preview", "--port", `${port}`],
    {
      cwd: root,
      ready: `${origin}${base}`,
    },
  );
  browser = await launch();
});
after(async () => {
  await browser?.close();
  await preview?.stop();
});

/** Clicks the element the selector names at its center, as a person's mouse does. */
async function click(page: Page, selector: string): Promise<void> {
  const { x, y } = await page.evaluate(`(() => {
    const rect = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
    return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
  })()`);
  for (const type of ["mousePressed", "mouseReleased"]) {
    await page.cdp("Input.dispatchMouseEvent", { type, x, y, button: "left", clickCount: 1 });
  }
}

/** Presses a lowercase letter key as a US keyboard types it: keyDown with its text, then keyUp. */
async function press(page: Page, letter: string): Promise<void> {
  const event = {
    key: letter,
    code: `Key${letter.toUpperCase()}`,
    windowsVirtualKeyCode: letter.toUpperCase().charCodeAt(0),
  };
  await page.cdp("Input.dispatchKeyEvent", { type: "keyDown", ...event, text: letter });
  await page.cdp("Input.dispatchKeyEvent", { type: "keyUp", ...event });
}

describe("the site under its base", () => {
  test("opens the theme menu with its sheet adopted, every request under the base", async (t) => {
    // Every request, response, and failed load the page's network log records, from the first.
    const requests: string[] = [];
    const responses: { url: string; status: number }[] = [];
    const failures: { url: string; errorText: string }[] = [];
    const urls = new Map<string, string>();
    const page = await browser.open("about:blank");
    try {
      page.on(
        "Network.requestWillBeSent",
        ({ requestId, request }: { requestId: string; request: { url: string } }) => {
          requests.push(request.url);
          urls.set(requestId, request.url);
        },
      );
      page.on(
        "Network.responseReceived",
        ({ response }: { response: { url: string; status: number } }) =>
          responses.push({ url: response.url, status: response.status }),
      );
      page.on(
        "Network.loadingFailed",
        ({ requestId, errorText }: { requestId: string; errorText: string }) =>
          failures.push({ url: urls.get(requestId) ?? requestId, errorText }),
      );
      await page.cdp("Network.enable");
      await page.goto(`${origin}${base}`);
      assert.ok(title, "index.html has a title");
      assert.equal(await page.evaluate("document.title"), title);

      // The build's one module script, its entry, is render-blocking, so it ran before first
      // paint: sl-theme-menu is defined, the menu itself not loaded.
      assert.deepEqual(
        await page.evaluate(`[...document.querySelectorAll('script[type="module"]')]
          .map((script) => script.blocking.contains("render"))`),
        [true],
      );
      assert.equal(await page.evaluate(`!!customElements.get("sl-theme-menu")`), true);
      assert.equal(await page.evaluate("document.adoptedStyleSheets.length"), 0);

      await click(page, "button[commandfor=theme]");
      await until(page, `document.querySelector("sl-theme-menu dialog")?.matches(":modal")`);
      // The menu adopts its sheet, the constructed CSSStyleSheet the build made of its CSS module
      // script, onto the document, in its layer.
      const sheets = await page.evaluate(`document.adoptedStyleSheets.map((sheet) =>
        [...sheet.cssRules].map((rule) => rule.name))`);
      assert.deepEqual(sheets, [["foundation.theme-menu"]]);

      for (const url of requests) t.diagnostic(url);
      assert.deepEqual(failures, []);
      assert.deepEqual(
        responses.filter(({ status }) => status >= 400),
        [],
      );
      assert.deepEqual(
        requests.filter((url) => !url.startsWith(`${origin}${base}`)),
        [],
        "every request resolves under the base",
      );
      // The page, its entry and stylesheet, and the menu's chunk, loaded on the first open; no
      // stylesheet is fetched for the menu, whose sheet is in its chunk.
      assert.ok(requests.includes(`${origin}${base}`), "the page loaded");
      const assets = requests.filter((url) => url.startsWith(`${origin}${base}assets/`));
      for (const pattern of [
        /\/index-[\w-]+\.js$/,
        /\/index-[\w-]+\.css$/,
        /\/theme-menu-[\w-]+\.js$/,
      ]) {
        assert.ok(
          assets.some((url) => pattern.test(url)),
          `an asset matching ${pattern} loaded`,
        );
      }
      assert.deepEqual(
        requests.filter((url) => /theme-menu[\w-]*\.css$/.test(url)),
        [],
      );
    } finally {
      await page.close();
    }
  });
  test("opens the theme menu on T, and each row's choice sets its attribute on the root", async () => {
    const page = await browser.open("about:blank");
    try {
      await page.goto(`${origin}${base}`);
      await press(page, "t");
      await until(page, `document.querySelector("sl-theme-menu dialog")?.matches(":modal")`);

      // Each facet's row, by its section, and the root attribute preferences.js sets for it.
      const facets = [
        ["color", "data-palette"],
        ["space", "data-space"],
        ["type", "data-type"],
      ];
      // Every row lists more than its default: the full entry registered every built-in profile.
      const rows: Record<string, { values: string[]; checked: string }> = await page.evaluate(`
        Object.fromEntries([...document.querySelectorAll("sl-theme-menu [data-section]")].map(
          (row) => [row.dataset.section, {
            values: [...row.querySelectorAll("input")].map((radio) => radio.value),
            checked: row.querySelector(":checked").value,
          }]))`);
      for (const [facet] of facets) {
        assert.ok(rows[facet].values.length > 1, `the ${facet} row offers ${rows[facet].values}`);
      }

      // Focus opens on the first row, color; l steps a row to its next radio, j moves down a row.
      // Each facet's row steps once, past the scheme row, to the radio after its default.
      for (const [index, [facet, attribute]] of facets.entries()) {
        if (index > 0) await press(page, "j");
        if (facet === "space") await press(page, "j");
        await press(page, "l");
        const { values, checked } = rows[facet];
        const chosen = values[(values.indexOf(checked) + 1) % values.length];
        assert.equal(
          await page.evaluate(`document.documentElement.getAttribute("${attribute}")`),
          chosen,
          `choosing ${chosen} in the ${facet} row sets ${attribute}`,
        );
      }
    } finally {
      await page.close();
    }
  });

  test("holds main to a reading width, centered, in a 1600px viewport", async () => {
    const page = await browser.open("about:blank");
    try {
      // A viewport wider than any reading width, so main's cap shows.
      await page.cdp("Emulation.setDeviceMetricsOverride", {
        width: 1600,
        height: 900,
        deviceScaleFactor: 1,
        mobile: false,
      });
      await page.goto(`${origin}${base}`);
      const { width, left, right, viewport }: Record<string, number> = await page.evaluate(`(() => {
        const rect = document.querySelector("main").getBoundingClientRect();
        const viewport = document.documentElement.clientWidth;
        return { width: rect.width, left: rect.left, right: viewport - rect.right, viewport };
      })()`);
      assert.ok(width < viewport * 0.75, `main's ${width}px is capped in ${viewport}px`);
      assert.ok(Math.abs(left - right) <= 1, `main is centered, ${left}px and ${right}px`);
    } finally {
      await page.close();
    }
  });
});
