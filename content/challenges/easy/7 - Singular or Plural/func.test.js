const func = require("./func.js");

test("Expected: 'true'", () => {
  expect(func("dudes")).toBe(true);
});
test("Expected: 'False'", () => {
  expect(func("mood")).toBe(false);
});
test("Expected: 'true'", () => {
  expect(func('flowers')).toBe(true);
});
test("Expected: 'false'", () => {
  expect(func('whiteboard')).toBe(false);
});
test("Expected: 'false'", () => {
  expect(func('love')).toBe(false);
});
