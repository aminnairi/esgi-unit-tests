"use strict";

/**
 * Compute the sum of two numbers
 * @param {Number} first First number to add
 * @param {Number} second Second number to add
 * @throws {Error} If the function is not called with two arguments
 * @throws {TypeError} If the first argument is not a number
 * @throws {TypeError} If the second argument is not a number
 * @return {Number} The sum of the two numbers
 */
export function add(first, second) {
    if (arguments.length !== 2) {
        throw new Error("expected two arguments");
    }

    if (typeof first !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof second !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    if (!Number.isInteger(first)) {
        throw new TypeError("expected first argument to be an integer");
    }

    if (!Number.isInteger(second)) {
        throw new TypeError("expected second argument to be an integer");
    }

    return first + second;
}

/**
 * Compute the subtraction of two numbers
 * @param {Number} first First number to subtract
 * @param {Number} second Second number to subtract
 * @throws {Error} If the function is not called with two arguments
 * @throws {TypeError} If the first argument is not a number
 * @throws {TypeError} If the second argument is not a number
 * @return {Number} The subtraction of the two numbers
 */
export function sub(first, second) {
    if (arguments.length !== 2) {
        throw new Error("expected two arguments");
    }

    if (typeof first !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof second !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    if (!Number.isInteger(first)) {
        throw new TypeError("expected first argument to be an integer");
    }

    if (!Number.isInteger(second)) {
        throw new TypeError("expected second argument to be an integer");
    }

    return first - second;
}

/**
 * Compute the multiplication of two numbers
 * @param {Number} first First number to multiply
 * @param {Number} second Second number to multiply
 * @throws {Error} If the function is not called with two arguments
 * @throws {TypeError} If the first argument is not a number
 * @throws {TypeError} If the second argument is not a number
 * @return {Number} The multiplication of the two numbers
 */
export function mul(first, second) {
    if (arguments.length !== 2) {
        throw new Error("expected two arguments");
    }

    if (typeof first !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof second !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    if (!Number.isInteger(first)) {
        throw new TypeError("expected first argument to be an integer");
    }

    if (!Number.isInteger(second)) {
        throw new TypeError("expected second argument to be an integer");
    }

    return first * second;
}

/**
 * Compute the division of two numbers
 * @param {Number} first First number to divide
 * @param {Number} second Second number to divide
 * @throws {Error} If the function is not called with two arguments
 * @throws {TypeError} If the first argument is not a number
 * @throws {TypeError} If the second argument is not a number
 * @return {Number} The division of the two numbers
 */
export function div(first, second) {
    if (arguments.length !== 2) {
        throw new Error("expected two arguments");
    }

    if (typeof first !== "number") {
        throw new TypeError("expected first argument to be a number");
    }

    if (typeof second !== "number") {
        throw new TypeError("expected second argument to be a number");
    }

    if (!Number.isInteger(first)) {
        throw new TypeError("expected first argument to be an integer");
    }

    if (!Number.isInteger(second)) {
        throw new TypeError("expected second argument to be an integer");
    }

    if (second === 0) {
        throw new Error("expected second argument to be different than zero");
    }

    return first / second;
}

/**
 * Compute the division of two numbers
 * @param {Number} first First number to divide
 * @param {Number} second Second number to divide
 * @throws {Error} If the function is not called with two arguments
 * @throws {TypeError} If the first argument is not a number
 * @throws {TypeError} If the second argument is not a number
 * @return {Number} The division of the two numbers
 */
export function avg(numbers) {
    if (arguments.length !== 1) {
        throw new Error("expected one argument");
    }

    if (!Array.isArray(numbers)) {
        throw new TypeError("expected first argument to be an array");
    }

    const total = numbers.reduce((sum, number) => {
        if (typeof number !== "number") {
            throw new TypeError("expected first argument to be an array of numbers");
        }

        if (!Number.isInteger(number)) {
            throw new TypeError("expected first argument to be an array of integers");
        }

        return sum + number;
    }, 0);

    return total / numbers.length;
}
