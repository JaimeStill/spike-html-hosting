// mise run screenshots' capture file, which the tooling's spike-html-apps-screenshots bin runs:
// the SDK's description of the one page the root builds, its index, --page index, captured whole,
// wide and narrow, and with its theme menu open. The site is served as the browser tier serves it,
// by the SDK's served(), under the base.
// Adapted from spike-html-hosting-architecture (27d70e1): scripts/screenshots.config.ts, its
// description the SDK's.
// Adapted from spike-html-hosting-sdk (v0.1.0): template/scripts/screenshots.config.ts, its pages
// the root's index alone, with no content.json to list them from.

import { join } from "node:path";

import { description } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";

const root = join(import.meta.dirname, "..");

export default description({ root, pages: ["index.html"] });
