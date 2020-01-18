const func = require('./func.js');

test('Expect true, is isogram', () => {
    expect(func("Algorism")).toBe(true);
});
test('Expect false, is not isogram', () => {
    expect(func("PasSword")).toBe(false);
});
test('Expect false, is not isogram', () => {
    expect(func("Consecutive")).toBe(false);
});