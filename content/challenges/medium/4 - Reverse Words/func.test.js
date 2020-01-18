const func = require('./func.js');

test('Expect the whole thing to be reversed', () => {
    expect(func("Reverse")).toBe("esreveR");
});
test('Expect only certain words to be reversed"', () => {
    expect(func("This is a typical sentence.")).toBe("This is a lacipyt .ecnetnes");
});
test('Expect result to match input', () => {
    expect(func("The dog is big.")).toBe("The dog is big.");
});
