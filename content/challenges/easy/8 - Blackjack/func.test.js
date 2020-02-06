const func = require("./func.js");

test("Expected: 'False'", () => {
  expect(func(['A', 2, 3])).toBe(false);
});
test("Expected: 'False'", () => {
  expect(func(['A', 'J', 'K'])).toBe(false);
});
test("Expected: 'true'", () => {
  expect(func(['A', 'J', 'K', 'Q'])).toBe(true);
});
test("Expected: 'true'", () => {
  expect(func([5, 3, 6, 6, 7, 9])).toBe(true);
});
