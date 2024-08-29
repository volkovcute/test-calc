const Calculator = require('../src/calculator');
const {describe, test, expect, beforeEach} = require('@jest/globals');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should calculate simple addition', () => {
        expect(calculator.calculate('1+2')).toBe(3);
    });

    test('should calculate expression with multiple operations', () => {
        expect(calculator.calculate('2*3+4/2')).toBe(8);
    });

    test('should handle parentheses', () => {
        expect(calculator.calculate('(2+3)*4')).toBe(20);
    });

    test('should throw an error for invalid expression', () => {
        expect(() => calculator.calculate('2++3')).toThrow('Invalid mathematical expression');
    });
});
