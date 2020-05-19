const func = require('./func.js');

test('Expect 8', () => {
    expect(func(32, 8)).toEqual(8);
});

test('Expect 4', () => {
    expect(func(8, 12)).toEqual(4);
});

test('Expect 1', () => {
    expect(func(17, 13)).toEqual(1);
});