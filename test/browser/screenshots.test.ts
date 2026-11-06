// mise run screenshots' command, the tooling's spike-html-apps-screenshots on
// scripts/screenshots.config.ts, run once as the task runs it, with the SDK's capture run: the
// index, light, to the terminal, under a scratch TMPDIR. It leaves nothing there, and with --keep
// leaves what it printed, so the first run's empty TMPDIR is the output's cleanup, not a capture
// that never wrote. The capture file describes every page the root builds, the hand index and
// both trees' copied pages, at their paths under the base.
// Adapted from spike-html-hosting-architecture (27d70e1): test/browser/screenshots.test.ts, its
// run and assertions the SDK's.
// Adapted from spike-html-hosting-sdk (v0.1.0): template/test/browser/screenshots.test.ts.
// Adapted from spike-html-hosting-sdk (v0.4.0): test/browser/trees.test.ts, its capture file test,
// its pages the root's.

import assert from "node:assert/strict";
import { join } from "node:path";
import { describe, test } from "node:test";
import { pathToFileURL } from "node:url";

import type { Description } from "@jaimestill/spike-html-apps-tooling/screenshots.js";
import { keepsCaptures, leavesNoCapture } from "@jaimestill/spike-html-hosting-sdk/screenshots.js";

const root = join(import.meta.dirname, "../..");
const config = join(root, "scripts/screenshots.config.ts");

describe("mise run screenshots' command", () => {
  test("captures the index under TMPDIR and leaves nothing there", () => {
    leavesNoCapture(root, config);
  });

  test("with --keep, leaves every capture file it printed", () => {
    keepsCaptures(root, config);
  });

  test("its capture file describes every page the root builds, under the base", async () => {
    const { default: described } = (await import(pathToFileURL(config).href)) as {
      default: Description;
    };
    assert.deepEqual(
      described.pages.map(({ name, path }) => [name, path]),
      [
        ["index", "/spike-html-hosting/"],
        ["github/profile", "/spike-html-hosting/github/profile/"],
        ["org/briefs/orientation", "/spike-html-hosting/org/briefs/orientation.html"],
      ],
    );
  });
});
