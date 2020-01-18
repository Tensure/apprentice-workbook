const func = require('./func.js');

test('Expects "Boop" to have double letter', () => {
    expect(func("Boop")).toBe(true);
});
test('Expects "yummy" to have double letter', () => {
    expect(func("yummy")).toBe(true);
});
test('Expects "orange" to NOT have double letter', () => {
    expect(func("orange")).toBe(false);
});
test('Expects "munchkin" to NOT have double letter', () => {
    expect(func("munchkin")).toBe(false);
});
