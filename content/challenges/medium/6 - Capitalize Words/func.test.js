const func = require('./func.js');

test('Expect title case', () => {
    expect(func("This is a title")).toBe("This Is A Title");
});
test('Expect title case 2', () => {
    expect(func("capitalize every word")).toBe("Capitalize Every Word");
});
test('Expects nothing to change, already title case', () => {
    expect(func("I Like Pizza")).toBe("I Like Pizza");
});
test('Expect Nothing to change, everything already caps', () => {
    expect(func("PIZZA PIZZA PIZZA")).toBe("PIZZA PIZZA PIZZA");
});