const fizzbuzz = require('../fizzbuzz.js');

describe('FizzBuzz', () => {
    it('should return Fizz instead of 3', () => {
        expect(fizzbuzz.fizz()).toContain("Fizz")
    });
    it('should NOT return a number divisible by 3', () => {
        expect(fizzbuzz.fizz()).not.toContain(fizzbuzz.numbersDivisibleBy3())
    })
    it('should return Buzz instead of 5', () => {
        expect(fizzbuzz.fizz()).toContain("Buzz")
    });
    it('should NOT return a number divisible by 5', () => {
        expect(fizzbuzz.fizz()).not.toContain(fizzbuzz.numbersDivisibleBy5())
    });
    it('should return FizzBuzz instead of a number divisible by 3 and 5', () => {
        expect(fizzbuzz.fizz()).toContain("FizzBuzz");
    });
    it('should NOT return a number divisible by 3 and 5', () => {
        expect(fizzbuzz.fizz).not.toContain(fizzbuzz.numbersDivisibleBy3And5())
    });

})