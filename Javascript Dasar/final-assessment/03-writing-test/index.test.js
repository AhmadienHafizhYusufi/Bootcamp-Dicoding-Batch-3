// Mengimport fungsi test dari modul node:test
import { test } from "node:test";
// Mengimport fungsi assert dari modul node:test
import assert from "node:assert";
// Mengimport fungsi sum dari file index.js
import { sum } from "./index.js";

test("Hasil fungsi sum dengan test", () => {
  console.log(`sum(1, 1) = ${sum(1, 1)}`); // Menampilkan hasil sum(1, 1)
  assert.strictEqual(sum(1, 1), 2, "Test sum(1, 1) gagal"); // Akan ditampilkan jika sum(1, 1) bukan 2
  console.log(`sum(-1, 1) = ${sum(-1, 1)}`); // Menampilkan hasil sum(-1, 1)
  assert.strictEqual(sum(-1, 1), 0, "Test sum(-1, 1) gagal"); // Akan ditampilkan jika sum(-1, 1) bukan 0
  console.log(`sum(0, 0) = ${sum(0, 0)}`); // Menampilkan hasil sum(0, 0)
  assert.strictEqual(sum(0, 0), 0, "Test sum(0, 0) gagal"); // Akan ditampilkan jika sum(0, 0) bukan 0
  console.log(`sum(2, -3) = ${sum(2, -3)}`); // Menampilkan hasil sum(2, -3)
  assert.strictEqual(sum(2, -3), -1, "Test sum(2, -3) gagal"); // Akan ditampilkan jika sum(2, -3) bukan -1
});
