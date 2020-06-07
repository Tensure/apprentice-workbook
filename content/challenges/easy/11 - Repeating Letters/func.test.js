const func = require("./func.js");

test("Expected: SSttrriinngg", () => {
  expect(func("String")).toBe("SSttrriinngg");
});
test("Expected: HHeelllloo WWoorrlldd!!", () => {
  expect(func("Hello World!")).toBe("HHeelllloo  WWoorrlldd!!");
});
test("Expected: TTeennssuurree", () => {
  expect(func("Tensure")).toBe("TTeennssuurree");
});
test("Expected: ##^^&&&&**(())))", () => {
  expect(func("#^&&*())")).toBe("##^^&&&&**(())))");
});


