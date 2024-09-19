import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Fungsi Sum", () => {
  // Arrange
  const a = 1;
  const b = 1;

  // Action
  const total = sum(a, b);

  // Assert
  const harus = 2;
  assert.equal(total, harus);

  assert.equal(sum(1, 2), 3, "Seharusnya 3");
});
