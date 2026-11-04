// The site's build (mise run build): index.html, the one page the root builds, and the foundation
// modules it loads, into dist/: static files GitHub Pages serves as the repository's project site,
// under /<repository>/. The base is that path, and the repository's name is package.json's name,
// the one place it is written; the SDK's served(), which the browser tier and the captures serve
// the build with, reads the same name.
//
// The plugins, each the SDK's: cssModuleScripts, the CSS module script rewrite of the foundation's
// modules, first; and renderBlocking, which keeps the page's one entry script render-blocking.
// The root copies no Markdown tree, so it runs no markdownPages: its index is its own page.
// Adapted from spike-html-apps (529ec52): vite.external.config.ts, its plugins, with the base the
// Pages path and no preview host.
// Adapted from spike-html-hosting-sdk (v0.1.0): template/vite.config.ts, without markdownPages
// and content.json, its one page the root's index.

import { fileURLToPath } from "node:url";

import { cssModuleScripts } from "@jaimestill/spike-html-hosting-sdk/css-module-scripts.js";
import { renderBlocking } from "@jaimestill/spike-html-hosting-sdk/render-blocking.js";
import { base } from "@jaimestill/spike-html-hosting-sdk/served.js";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: base(root),
  plugins: [cssModuleScripts(), renderBlocking()],
  // No public directory: the page and what it imports are the whole site.
  publicDir: false,
  build: {
    outDir: "dist",
    target: "es2024",
  },
  // A path no page builds to is a 404 in the preview, as it is on Pages, never a fallback to the
  // index, so the shell checks' every request under the base, none failed, can't pass on one.
  appType: "mpa",
});
