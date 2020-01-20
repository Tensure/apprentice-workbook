const func = require('./func.js');

test('Expect true, is palindrom', () => {
    expect(func("abcba")).toBe(true);
});
test('Expect true, 1 character is always palindrom', () => {
    expect(func("b")).toBe(true);
});
test('Expect true, 0 characters is always palindrom', () => {
    expect(func("")).toBe(true);
});
test('Expect false, 2 different characters is never palindrome', () => {
    expect(func("ba")).toBe(false);
});
