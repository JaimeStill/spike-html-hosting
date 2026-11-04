// mise run screenshots' capture description, which the tooling's spike-html-apps-screenshots bin
// runs: the one page the site builds, its index, named "index", captured whole, in tiles, at a
// wide and a narrow width, and with its theme menu open, wide and narrow. The profile's facets,
// palette, space, and type, at flexoki, regular, and mono; --all's profiles, every palette at the
// defaults, then compact and sans at flexoki; the profiles the page registers, from the
// foundation's registry, every built-in one, as the page loads the full entry. The site is served
// as the browser tier serves it, by Vite's preview under the base (test/browser/support/served.ts),
// so a capture makes the requests the deployed site makes.
// Adapted from spike-html-apps-foundation (d5037b4): scripts/screenshots.config.ts, its theme
// menu's open step, viewports, facets, --all, and registry read.
// Adapted from spike-html-apps-components (19d4f59): scripts/screenshots.config.ts, its server
// the browser tier's.
// Adapted from spike-html-hosting-architecture (a20a1e0): scripts/screenshots.config.ts, its pages
// the one index the root builds, with no content.json to map.

import { until } from "@jaimestill/spike-html-apps-tooling/browser.js";
import type {
  DescribedState,
  Description,
  Step,
  Viewport,
} from "@jaimestill/spike-html-apps-tooling/screenshots.js";

import { served } from "../test/browser/support/served.ts";
import { base } from "../vite.config.ts";

// A desktop's width, and, below the theme menu's 48rem breakpoint, a phone's.
const WIDE: Viewport = { width: 1280, height: 800 };
const NARROW: Viewport = { width: 390, height: 844 };

/**
 * Opens the theme menu: the Theme button's command="--open", as a click sends it to
 * <sl-theme-menu>.
 */
const openThemeMenu: Step = async (page) => {
  await page.evaluate(`document.querySelector("button[commandfor=theme]").click()`);
  await until(page, `document.querySelector("sl-theme-menu dialog")?.open`);
};

/** The index's caption: its URL path, the base itself. */
const caption = base;

/** The index's states: the whole page at each width, and the theme menu open at each. */
const states: DescribedState[] = [
  { name: "index-wide", caption: `${caption}, wide`, viewport: WIDE, full: true },
  { name: "index-narrow", caption: `${caption}, narrow`, viewport: NARROW, full: true },
  {
    name: "index-theme-menu-wide",
    caption: `${caption}, the theme menu open, wide`,
    viewport: WIDE,
    full: false,
    open: openThemeMenu,
  },
  {
    name: "index-theme-menu-narrow",
    caption: `${caption}, the theme menu open, narrow`,
    viewport: NARROW,
    full: false,
    open: openThemeMenu,
  },
];

/** The page's registered names, by flag, read from the foundation's store at its well-known
 * global key; its color facet is palette's. */
const REGISTRY = `(() => {
  const store = globalThis[Symbol.for("spike-html-apps-foundation.registry")] ?? {};
  return { palette: store.color ?? [], space: store.space ?? [], type: store.type ?? [] };
})()`;

const description: Description = {
  // The index, at the base itself: its path under the base is empty.
  pages: [{ name: "index", caption, path: "", states }],
  facets: [
    { flag: "palette", attribute: "data-palette", default: "flexoki" },
    { flag: "space", attribute: "data-space", default: "regular" },
    { flag: "type", attribute: "data-type", default: "mono" },
  ],
  // Every color at the defaults, then the other space and the other type at the default color.
  all: [
    ...["flexoki", "primer", "catppuccin", "everforest"].map((palette) => ({ palette })),
    { space: "compact" },
    { type: "sans" },
  ],
  profiles: (page) => page.evaluate(REGISTRY),
  server: served,
};

export default description;
