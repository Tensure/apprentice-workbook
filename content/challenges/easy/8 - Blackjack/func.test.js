const func = require("./func.js");

test("Expected: 'False'", () => {
  expect(func(['A', 2, 3])).toEqual(false);
});
test("Expected: 'False'", () => {
  expect(func(['A', 'J', 'K'])).toEqual(false);
});
test("Expected: 'true'", () => {
  expect(func(['A', 'J', 'K', 'Q'])).toEqual(true);
});
test("Expected: 'true'", () => {
  expect(func([5, 3, 6, 6, 7, 9])).toEqual(true);
});
