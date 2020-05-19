const func = require("./func.js");

test("Expected: 'Hello'", () => {
  expect(func(3)).toEqual('Hello');
});
test("Expected: 'Tensure'", () => {
  expect(func(5)).toEqual('Tensure');
});
test("Expected: 'Hello Tensure'", () => {
  expect(func(15)).toEqual('Hello Tensure');
});
