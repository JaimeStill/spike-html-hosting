// The site's build (mise run build): index.html, the root's own hand page; a page for each
// Markdown file of its two copied trees, content/github/ from standards-lab/.github and
// content/org/ from standards-lab/org, as content.json records them, each filling page.html, the
// shell its rendered pages share; and the foundation modules the pages load, into dist/: static
// files GitHub Pages serves as the repository's project site, under /<repository>/. The base is
// that path, and the repository's name is package.json's name, the one place it is written; the
// SDK's served(), which the browser tier and the captures serve the build with, reads the same
// name.
//
// The plugins, each the SDK's: cssModuleScripts, the CSS module script rewrite of the foundation's
// modules, first; markdownPages, which renders the copied trees into pages, each tree's links
// placed against its own source at its pinned commit, and fails the build on a relative link it
// can't place; and renderBlocking, which keeps each page's one entry script render-blocking.
// test/unit/content.test.ts holds the copies to content.json.
// Adapted from spike-html-apps (529ec52): vite.external.config.ts, its plugins, with the base the
// Pages path and no preview host.
// Adapted from spike-html-hosting (cb0511c): vite.config.ts, its one page a page for each copied
// Markdown file.
// Adapted from spike-html-hosting-architecture (27d70e1): vite.config.ts, its plugins and its base
// the SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/fixtures/trees/vite.config.ts, a root-style
// site's build, its trees the root's two, with no external, and its one hand page the index.

import { fileURLToPath } from "node:url";

import { cssModuleScripts } from "@jaimestill/spike-html-hosting-sdk/css-module-scripts.js";
import { markdownPages } from "@jaimestill/spike-html-hosting-sdk/markdown-pages.js";
import { renderBlocking } from "@jaimestill/spike-html-hosting-sdk/render-blocking.js";
import { base } from "@jaimestill/spike-html-hosting-sdk/served.js";
import { defineConfig } from "vite";

import content from "./content.json" with { type: "json" };

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: base(root),
  plugins: [
    cssModuleScripts(),
    // Each tree's source, its repository and the commit it was copied at. Every link the two
    // copies make is a full URL, so no tree lists a file it links but doesn't copy in external.
    markdownPages({
      dir: "content",
      trees: content.trees.map(({ url, commit }) => ({ repository: url, ref: commit })),
      shell: "page.html",
    }),
    renderBlocking(),
  ],
  // No public directory: the pages and what they import are the whole site.
  publicDir: false,
  build: {
    outDir: "dist",
    target: "es2024",
    // The hand page, which no shell fills: Vite builds index.html by default only with no input
    // given, and the plugin gives its pages.
    rolldownOptions: { input: [`${root}index.html`] },
  },
  // A path no page builds to is a 404 in the preview, as it is on Pages, never a fallback to the
  // index, so the shell checks' every request under the base, none failed, can't pass on one.
  appType: "mpa",
});
