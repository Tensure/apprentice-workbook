const func = require('./func.js');

test('Expect true (2am)', () => {
    expect(func(2)).toBe(true);
});
test('Expects true (11am)', () => {
    expect(func(11)).toBe(true);
});
test('Expects false (6pm)', () => {
    expect(func(18)).toBe(false);
});
test('Expects false (23)', () => {
    expect(func(23)).toBe(false);
});
