const func = require("./func.js");

test("Expected: hAPPY bIRTHDAY", () => {
  expect(func("Happy Birthday")).toBe("hAPPY bIRTHDAY");
});
test("Expected: MANY THANKS", () => {
  expect(func("many thanks")).toBe("MANY THANKS");
});
test("Expected: tENSURE", () => {
  expect(func("Tensure")).toBe("tENSURE");
});
test("Expected: SpOnTaNeOuS", () => {
  expect(func("sPoNtAnEoUs")).toBe("SpOnTaNeOuS");
});


