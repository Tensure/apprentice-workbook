const func = require('./func.js');

test('Expects "Boop" to have double letter', () => {
    expect(func("Boop")).toEqual(true);
});
test('Expects "yummy" to have double letter', () => {
    expect(func("yummy")).toEqual(true);
});
test('Expects "orange" to NOT have double letter', () => {
    expect(func("orange")).toEqual(false);
});
test('Expects "munchkin" to NOT have double letter', () => {
    expect(func("munchkin")).toEqual(false);
});
