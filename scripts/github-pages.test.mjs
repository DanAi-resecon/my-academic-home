import test from "node:test";
import assert from "node:assert/strict";
import { assetDestination } from "./github-pages.mjs";

test("pointer assets stay inside the static artifact", () => {
  assert.equal(assetDestination("/tmp/pages", "/__l5e/assets-v1/example/cv.pdf"), "/tmp/pages/__l5e/assets-v1/example/cv.pdf");
});

test("asset downloads cannot escape the artifact directory", () => {
  assert.throws(() => assetDestination("/tmp/pages", "/__l5e/assets-v1/../../../outside.pdf"), /escapes/);
});

test("external URLs are rejected rather than copied into arbitrary locations", () => {
  assert.throws(() => assetDestination("/tmp/pages", "https://example.com/cv.pdf"), /pointer/);
});