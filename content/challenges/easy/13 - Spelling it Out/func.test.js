const func = require("./func.js");

test("Expected: ['b', 'be', 'bee']", () => {
  expect(func("bee")).toBe(["b", "be", "bee"]);
});
test("Expected: ['h', 'ha', 'hap', 'happ', 'happy']", () => {
  expect(func("happy")).toBe(['h', 'ha', 'hap', 'happ', 'happy']);
});
test("Expected: ['T', 'Te', 'Ten', 'Tens', 'Tensu', 'Tensur', 'Tensure']", () => {
  expect(func("Tensure")).toBe(['T', 'Te', 'Ten', 'Tens', 'Tensu', 'Tensur', 'Tensure']);
});



