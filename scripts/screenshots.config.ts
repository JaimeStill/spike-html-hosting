// mise run screenshots' capture file, which the tooling's spike-html-apps-screenshots bin runs:
// the SDK's description of every page the root builds, the hand pages, the index, --page index,
// the orientation brief by hand, and the sitrep entry, the build's inputs in vite.config.ts's
// order, before every tree's copied pages, listed from content.json in the build's order, each
// captured whole at 390px, 1120px, and 1376px, and the index also with Help open and with
// Settings open at each. A page's name is its built path without .html, a directory's index its
// directory: the charter is --page github/profile, and the hand orientation page --page
// briefs/orientation. The site is served as the browser tier serves it, by the SDK's served(),
// under the base.
// Adapted from spike-html-hosting-architecture (27d70e1): scripts/screenshots.config.ts, its
// description the SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/fixtures/trees/screenshots.config.ts, a
// root-style site's pages, its hand pages the root's three.
// Adapted from spike-html-hosting-sdk (v0.6.0): template/scripts/screenshots.config.ts, its
// widths and the index's Help and Settings states.

import { join } from "node:path";

import { contentPages, description } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";

const root = join(import.meta.dirname, "..");

const hand = [
  "index.html",
  "briefs/orientation.html",
  "sitreps/2026-11-06-spike-html-hosting.html",
];

export default description({ root, pages: [...hand, ...contentPages(root)] });
