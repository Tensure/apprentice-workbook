const func = require("./func.js");

test("Expected: true (Might win)", () => {
  expect(func(0.2, 50, 9)).toEqual(true);
});
test("Expected: false (Might lose)", () => {
  expect(func(0.9, 1, 2)).toEqual(false);
});
test("Expected: false (Might lose)", () => {
  expect(func(0, 1000, 0.01)).toEqual(false);
});
