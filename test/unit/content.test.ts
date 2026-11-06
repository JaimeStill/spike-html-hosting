// The copied trees' provenance, with the SDK's content check: content.json records each tree, the
// charter from standards-lab/.github and the orientation brief from standards-lab/org, its source
// repository, the commit it was copied at, and each copied file's git blob hash at that commit,
// and each file under content/<tree>/ must match its record. An edited copy, a recorded file
// missing, a file no record names, two trees sharing a directory, or a source named by anything
// but a GitHub repository URL and a full commit fails here.
// Adapted from spike-html-hosting-architecture (27d70e1): test/unit/content.test.ts, its check the
// SDK's.
// Adapted from spike-html-hosting-sdk (v0.4.0): template/test/unit/content.test.ts, its record
// several trees.

import assert from "node:assert/strict";
import { join } from "node:path";
import { test } from "node:test";

import { checkContent } from "@jaimestill/spike-html-hosting-sdk/content.js";

test("each copied tree is its record", () => {
  assert.deepEqual(checkContent(join(import.meta.dirname, "../..")), []);
});
