// mise run screenshots' capture file, which the tooling's spike-html-apps-screenshots bin runs:
// the SDK's description of every page the root builds, the hand index, --page index, before every
// tree's copied pages, listed from content.json in the build's order, each captured whole, wide
// and narrow, and the index also with its theme menu open. A page's name is its built path without
// .html, a directory's index its directory: the charter is --page github/profile. The site is
// served as the browser tier serves it, by the SDK's served(), under the base.
// Adapted from spike-html-hosting-architecture (27d70e1): scripts/screenshots.config.ts, its
// description the SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/fixtures/trees/screenshots.config.ts, a
// root-style site's pages, its one hand page the index.

import { join } from "node:path";

import { contentPages, description } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";

const root = join(import.meta.dirname, "..");

export default description({ root, pages: ["index.html", ...contentPages(root)] });
