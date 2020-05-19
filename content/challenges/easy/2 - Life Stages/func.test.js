const func = require('./func.js');

test('Expect Baby (1.5', () => {
    expect(func(1.5)).toEqual('Baby');
});
test('Expects Kid (9)', () => {
    expect(func(9)).toEqual('Kid');
});
test('Expects Teen (15)', () => {
    expect(func(15)).toEqual('Teen');
});
test('Expects Young Adult (23)', () => {
    expect(func(23)).toEqual('Young Adult');
});
test('Expects Dead (33)', () => {
    expect(func(33)).toEqual('Dead');
});
