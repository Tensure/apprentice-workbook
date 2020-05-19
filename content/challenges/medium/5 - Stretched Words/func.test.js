const func = require('./func.js');

test('Result should be poem', () => {
    expect(func("ppoeemm")).toEqual("poem");
});

test('Result should be wind', () => {
    expect(func("wiiiinnnnd")).toEqual("wind");
});

test('Result should be title', () => {
    expect(func("ttiiitllleeee")).toEqual("title");
});

test('Result should be carbon', () => {
    expect(func("cccccaaarrrbbonnnnn")).toEqual("carbon");
});
