const func = require("./func.js");

test("Expected: 10", () => {
  expect(func(4)).toBe(10);
});
test("Expected: 180300", () => {
  expect(func(600)).toBe(180300);
});
test("Expected: 1431", () => {
  expect(func(53)).toBe(1431);
});
test("Expected: 276", () => {
  expect(func(23)).toBe(276);
});
test("Expected: 15400", () => {
  expect(func(175)).toBe(15400);
});
test("Expected: 6216", () => {
  expect(func(111)).toBe(6216);
});

