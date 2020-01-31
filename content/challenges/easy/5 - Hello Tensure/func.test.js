const func = require("./func.js");

test("Expected: 'Hello'", () => {
  expect(func(3)).toBe('Hello');
});
test("Expected: 'Tensure'", () => {
  expect(func(5)).toBe('Tensure');
});
test("Expected: 'Hello Tensure'", () => {
  expect(func(15)).toBe('Hello Tensure');
});
