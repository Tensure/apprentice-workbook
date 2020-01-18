const func = require('./func.js');

test('Result should be poem', () => {
    expect(func("ppoeemm")).toBe("poem");
});

test('Result should be wind', () => {
    expect(func("wiiiinnnnd")).toBe("wind");
});

test('Result should be title', () => {
    expect(func("ttiiitllleeee")).toBe("title");
});

test('Result should be carbon', () => {
    expect(func("cccccaaarrrbbonnnnn")).toBe("carbon");
});
