import { Kata, doSomething } from "../src/Kata";

describe("Kata Test", () => {

    it("should do something in a class", () => {
        const kata = new Kata()

        expect(kata.something()).toBe(true);
    });

    it("should do something in a function", () => {
        expect(doSomething()).toBe(true)
    });
});
