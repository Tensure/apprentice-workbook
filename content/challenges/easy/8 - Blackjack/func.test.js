const func = require("./func.js");

test("Expected: 'False'", () => {
  expect(func(['A', 2, 3])).toEqual(false);
});
test("Expected: 'Blackjack!'", () => {
  expect(func(['A', 'J', 'K'])).toEqual('Blackjack!');
});
test("Expected: 'true'", () => {
  expect(func(['A', 'J', 'K', 'Q'])).toEqual(true);
});
test("Expected: 'true'", () => {
  expect(func([5, 3, 6, 6, 7, 9])).toEqual(true);
});
test("Expected: 'False'", () => {
  expect(func(['A', 'A', 'A', 'A'])).toEqual(false);
});
test("Expected: 'False'", () => {
  expect(func(['A', 'A'])).toEqual(false);
});
test("Expected: 'Blackjack!'", () => {
  expect(func(['A', 'K'])).toEqual('Blackjack!');
});
test("Expected: 'Blackjack!'", () => {
  expect(func(['A', 10])).toEqual('Blackjack!');
});
test("Expected: 'Blackjack!'", () => {
  expect(func(['A', 'A', 10])).toEqual(true);
});
test("Expected: 'Blackjack!'", () => {
  expect(func(['A', 9, 'A'])).toEqual('Blackjack!');
});
