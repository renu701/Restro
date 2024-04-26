import { sum } from "../sum";

test("to test sum of 2 numbers", () => {
  const result = sum(1, 3);

  //Assertion
  expect(result).toBe(4);
});
