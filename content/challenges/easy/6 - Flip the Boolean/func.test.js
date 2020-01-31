const func = require("./func.js");

test("Expected: 'True'", () => {
  expect(func(false)).toBe(true);
});
test("Expected: 'False'", () => {
  expect(func(true)).toBe(false);
});
test("Expected: 'boolean expected'", () => {
  expect(func(null)).toBe('boolean expected');
});
test("Expected: 'boolean expected'", () => {
  expect(func(undefined)).toBe('boolean expected');
});
test("Expected: 'boolean expected'", () => {
  expect(func(0)).toBe('boolean expected');
});
