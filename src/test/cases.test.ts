import { solutionP1, solutionP2 } from "..";
import { testCasesArrP1, testCasesArrP2 } from "./cases";

testCasesArrP1.forEach((tc) => {
  test(tc.desc, () => {
    expect(tc.exc).toBe(tc.toBe);
  });
});
testCasesArrP2.forEach((tc) => {
  test(tc.desc, () => {
    expect(tc.exc).toBe(tc.toBe);
  });
});
