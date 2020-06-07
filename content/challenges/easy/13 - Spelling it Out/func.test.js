const func = require("./func.js");

test("Expected: ['b', 'be', 'bee']", () => {
  expect(func("bee")).toStrictEqual(['b', 'be', 'bee']);
});
test("Expected: ['h', 'ha', 'hap', 'happ', 'happy']", () => {
  expect(func("happy")).toStrictEqual(['h', 'ha', 'hap', 'happ', 'happy']);
});
test("Expected: ['T', 'Te', 'Ten', 'Tens', 'Tensu', 'Tensur', 'Tensure']", () => {
  expect(func("Tensure")).toStrictEqual(['T', 'Te', 'Ten', 'Tens', 'Tensu', 'Tensur', 'Tensure']);
});



