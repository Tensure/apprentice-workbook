const func = require("./func.js");

test("Expected: true (Might win)", () => {
  expect(func(0.2, 50, 9)).toBe(true);
});
test("Expected: false (Might lose)", () => {
  expect(func(0.9, 1, 2)).toBe(false);
});
test("Expected: false (Might lose)", () => {
  expect(func(0, 1000, 0.01)).toBe(false);
});
