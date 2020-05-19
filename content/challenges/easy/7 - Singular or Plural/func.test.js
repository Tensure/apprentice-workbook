const func = require("./func.js");

test("Expected: 'true'", () => {
  expect(func("dudes")).toEqual(true);
});
test("Expected: 'False'", () => {
  expect(func("mood")).toEqual(false);
});
test("Expected: 'true'", () => {
  expect(func('flowers')).toEqual(true);
});
test("Expected: 'false'", () => {
  expect(func('whiteboard')).toEqual(false);
});
test("Expected: 'false'", () => {
  expect(func('love')).toEqual(false);
});
