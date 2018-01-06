import { add } from "./math";

describe("Math.js", () => {
	it("should floating point works in add()", () => {
		expect(add(0.1, 0.2)).not.toBe(0.3);
		expect(add(0.1, 0.2)).toBeCloseTo(0.3);
	});
});
