import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Case 1: salah satu atau keduanya bukan number maka nilai harus 0", (t) => {
  assert.strictEqual(sum("1", 2), 0);
  assert.strictEqual(sum(1, "2"), 0);
  assert.strictEqual(sum("1", "2"), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(1, null), 0);
});

test("Case 2: salah satu atau keduanya negatif", (t) => {
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(1, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test("Case 3: dua angka positif", (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

test("case 4: missing argument", (t) => {
  assert.strictEqual(sum(1), 0);
  assert.strictEqual(sum(undefined, 2), 0);
  assert.strictEqual(sum(), 0);
});
