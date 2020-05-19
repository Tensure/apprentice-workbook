const func = require("./func.js");

test("Expected: 24", () => {
  expect(func(4)).toEqual(24);
});
test("Expected: 1", () => {
  expect(func(1)).toEqual(1);
});
test("Expected: 2", () => {
  expect(func(2)).toEqual(2);
});
test("Expected:9", () => {
  expect(func(9)).toEqual(362880);
});

