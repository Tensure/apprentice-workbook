const func = require('./func.js');

test('Expects Missing Number to be 5', () => {
    expect(func([1, 2, 3, 4, 6, 7, 8, 9, 10])).toEqual(5);
});

test('Expects Missing Number to be 5', () => {
    expect(func([7, 2, 3, 6, 5, 9, 1, 4, 8])).toEqual(10);
});

test('Expects Missing Number to be 10', () => {
    expect(func([10, 5, 1, 2, 4, 6, 8, 3, 9])).toEqual(7);
});