const func = require('./func.js');

test('Expects result to be 0', () => {
    expect(func(0)).toEqual(0);
});
test('Expects result to be 1', () => {
    expect(func(1)).toEqual(1);
});
test('Expects result to be 21', () => {
    expect(func(8)).toEqual(21);
});
test('Expects result to be 144', () => {
    expect(func(12)).toEqual(144);
});