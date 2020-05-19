const func = require('./func.js');

test('Not enough money, FALSE', () => {
    expect(func(5, false, 'PG', 19, false)).toEqual(false);
});
test('Movie is full, FALSE', () => {
    expect(func(9.5, true, 'PG', 29, true)).toEqual(false);
});
test('under 17, no parent, false', () => {
    expect(func(9.5, false, 'R', 16, false)).toEqual(false);
});
test('under 17, parent is there, TRUE', () => {
    expect(func(9.5, false, 'R', 16, true)).toEqual(true);
});
test('Enough money, movie isn\'t full, over 17, TRUE', () => {
    expect(func(9.5, false, 'R', 29, true)).toEqual(true);
});
