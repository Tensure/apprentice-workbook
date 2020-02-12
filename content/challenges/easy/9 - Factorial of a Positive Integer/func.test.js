const func = require("./func.js");

test("Expected: 24", () => {
  expect(func(4)).toBe(24);
});
test("Expected: 1", () => {
  expect(func(1)).toBe(1);
});
test("Expected: 2", () => {
  expect(func(2)).toBe(2);
});
test("Expected:9", () => {
  expect(func(9)).toBe(362880);
});

