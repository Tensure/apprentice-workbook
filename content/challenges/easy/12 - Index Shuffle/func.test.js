const func = require("./func.js");

test("Expected: acegbdf", () => {
  expect(func("abcdefg")).toBe("acegbdf");
});
test("Expected: hldyoia", () => {
  expect(func("holiday")).toBe("hldyoia");
});
test("Expected: Tnueesr", () => {
  expect(func("Tensure")).toBe("Tnueesr");
});
test("Expected: myeab", () => {
  expect(func("maybe")).toBe("myeab");
});


