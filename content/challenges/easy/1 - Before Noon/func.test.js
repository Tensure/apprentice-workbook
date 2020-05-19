const func = require('./func.js');

test('Expect true (2am)', () => {
    expect(func(2)).toEqual(true);
});
test('Expects true (11am)', () => {
    expect(func(11)).toEqual(true);
});
test('Expects false (6pm)', () => {
    expect(func(18)).toEqual(false);
});
test('Expects false (23)', () => {
    expect(func(23)).toEqual(false);
});
