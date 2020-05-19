const func = require('./func.js');

test('Expect 4', () => {
    expect(func([[1], [2], [3], [4]])).toEqual(4);
});
test('Expect 1', () => {
    expect(func([[1, 2], [2, 3], [3, 4], [4, 4]])).toEqual(1);
});
test('Expect 4', () => {
    expect(func([[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1]])).toEqual(4);
});
test('Expect 2', () => {
    expect(func([["@", "@", "@", "@"], [2, 3], [3, 4], [4, 4]])).toEqual(2);
});