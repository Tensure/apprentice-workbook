const func = require('./func.js');

test('Expect true, is palindrome', () => {
    expect(func("abcba")).toEqual(true);
});
test('Expect true, 1 character is always palindrome', () => {
    expect(func("b")).toEqual(true);
});
test('Expect true, 0 characters is always palindrome', () => {
    expect(func("")).toEqual(true);
});
test('Expect false, 2 different characters is never palindrome', () => {
    expect(func("ba")).toEqual(false);
});
test('Expect true, is palindrome', () => {
    expect(func("abba")).toEqual(true);
});