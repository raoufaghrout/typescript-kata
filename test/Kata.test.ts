import Kata from "../src/Kata";

describe("Kata Test", () => {

    it("should do something", () => {
        const kata = new Kata()

       expect(kata.something()).toBe(false);
    });
});
