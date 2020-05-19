const func = require("./func.js");

test("Expected: 'True'", () => {
  expect(func(false)).toEqual(true);
});
test("Expected: 'False'", () => {
  expect(func(true)).toEqual(false);
});
test("Expected: 'boolean expected'", () => {
  expect(func(null)).toEqual('boolean expected');
});
test("Expected: 'boolean expected'", () => {
  expect(func(undefined)).toEqual('boolean expected');
});
test("Expected: 'boolean expected'", () => {
  expect(func(0)).toEqual('boolean expected');
});
