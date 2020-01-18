const func = require('./func.js');

test('Expects last remaining 31', () => {
    expect(func(41, 3)).toBe(31);
});
test('Expects last remaining 18', () => {
    expect(func(35, 11)).toBe(18);
});
test('Expects last remaining 11', () => {
    expect(func(11, 1)).toBe(11);
});
test('Expects last remaining 1', () => {
    expect(func(2, 2)).toBe(1);
});