const func = require('./func.js');

test('Expect 32, 8 > GCD 8', () => {
    expect(func(32, 8)).toBe(8);
});

test('Expect 8, 12 > GCD 4', () => {
    expect(func(8, 12)).toBe(4);
});

test('Expect 17, 13 > GCD 1', () => {
    expect(func(17, 13)).toBe(1);
});

test('Expect 2, 1 > GCD 1', () => {
    expect(func(2, 1)).toBe(1);
});

test('Expect 2, 3 > GCD 1', () => {
    expect(func(2, 1)).toBe(1);
});