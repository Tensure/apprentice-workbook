const func = require('./func.js');

test('Expect title case', () => {
    expect(func("This is a title")).toEqual("This Is A Title");
});
test('Expect title case 2', () => {
    expect(func("capitalize every word")).toEqual("Capitalize Every Word");
});
test('Expects nothing to change, already title case', () => {
    expect(func("I Like Pizza")).toEqual("I Like Pizza");
});
test('Expect Nothing to change, everything already caps', () => {
    expect(func("PIZZA PIZZA PIZZA")).toEqual("PIZZA PIZZA PIZZA");
});