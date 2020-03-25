"use strict";

import { describe, it } from "mocha";
import { expect } from "chai";
import { add, sub, mul, div, avg } from "../src/index.js";

describe("calculator", function() {
    describe("add", () => {
        it("should throw if the function is not called with two arguments", () => {
            expect(() => add()).to.throw(Error);
            expect(() => add(1)).to.throw(Error);
            expect(() => add(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", () => {
            expect(() => add("1", 2)).to.throw(TypeError);
        });

        it("should throw if the first argument is not an integer", () => {
            expect(() => add(1.1, 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", () => {
            expect(() => add(1, "2")).to.throw(TypeError);
        });

        it("should throw if the second argument is not an integer", () => {
            expect(() => add(1, 2.2)).to.throw(TypeError);
        });

        it("should return the sum of two numbers", () => {
            expect(add(1, 2)).to.equal(3);
        });
    });

    describe("sub", () => {
        it("should throw if the function is not called with two arguments", () => {
            expect(() => sub()).to.throw(Error);
            expect(() => sub(1)).to.throw(Error);
            expect(() => sub(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", () => {
            expect(() => sub("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", () => {
            expect(() => sub(1, "2")).to.throw(TypeError);
        });

        it("should throw if the first argument is not an integer", () => {
            expect(() => sub(1.1, 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not an integer", () => {
            expect(() => sub(1, 2.2)).to.throw(TypeError);
        });

        it("should return the subtraction of two numbers", () => {
            expect(sub(1, 2)).to.equal(-1);
        });
    });

    describe("mul", () => {
        it("should throw if the function is not called with two arguments", () => {
            expect(() => mul()).to.throw(Error);
            expect(() => mul(1)).to.throw(Error);
            expect(() => mul(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", () => {
            expect(() => mul("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", () => {
            expect(() => mul(1, "2")).to.throw(TypeError);
        });

        it("should throw if the first argument is not an integer", () => {
            expect(() => mul(1.1, 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not an integer", () => {
            expect(() => mul(1, 2.2)).to.throw(TypeError);
        });

        it("should return the multiplication of two numbers", () => {
            expect(mul(1, 2)).to.equal(2);
        });
    });

    describe("div", () => {
        it("should throw if the function is not called with two arguments", () => {
            expect(() => div()).to.throw(Error);
            expect(() => div(1)).to.throw(Error);
            expect(() => div(1, 2, 3)).to.throw(Error);
        });

        it("should throw if the first argument is not a number", () => {
            expect(() => div("1", 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not a number", () => {
            expect(() => div(1, "2")).to.throw(TypeError);
        });

        it("should throw if the divider is zero", () => {
            expect(() => div(1, 0)).to.throw(Error);
        });

        it("should throw if the first argument is not an integer", () => {
            expect(() => div(1.1, 2)).to.throw(TypeError);
        });

        it("should throw if the second argument is not an integer", () => {
            expect(() => div(1, 2.2)).to.throw(TypeError);
        });

        it("should return the division of two numbers", () => {
            expect(div(1, 2)).to.equal(0.5);
        });
    });

    describe("avg", () => {
        it("should throw if the function is not called with one argument", () => {
            expect(() => avg()).to.throw(Error);
            expect(() => avg([1, 2, 3], 1)).to.throw(Error);
        });

        it("should throw if the first argument is not an array", () => {
            expect(() => avg(1)).to.throw(TypeError);
        });

        it("should throw if the first argument is not an array of number", () => {
            expect(() => avg(["1", "2", "3"])).to.throw(TypeError);
        });

        it("should throw if the first argument is not an array of integers", () => {
            expect(() => avg([1.1, 2.2, 3.3])).to.throw(TypeError);
        });

        it("should return the average from the array of numbers", () => {
            expect(avg([1, 2, 3])).to.equal(2);
        });
    });
});
