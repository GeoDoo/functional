import { pipe } from "./utils";

describe("Utility functions", () => {
  describe("pipe", () => {
    it("should pipe functions together", () => {
      const power = (a, b) => a ** b;
      const negate = (num) => -num;
      const increment = (num) => num + 1;
      const f1 = pipe(power);
      const f2 = pipe(power, negate);
      const f3 = pipe(power, negate, increment);

      expect(f1(3, 4)).toBe(81);
      expect(f2(3, 4)).toBe(-81);
      expect(f3(3, 4)).toBe(-80);
    });
  });
});
