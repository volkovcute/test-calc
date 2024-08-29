const Parser = require('../src/parser');
const {describe, test, expect, beforeEach} = require('@jest/globals');

describe('Parser', () => {
    let parser;

    beforeEach(() => {
        parser = new Parser();
    });

    test('should remove spaces and return valid expression', () => {
        expect(parser.parse('1 + 2')).toBe('1+2');
    });

    test('should throw an error for invalid characters', () => {
        expect(() => parser.parse('1+2a')).toThrow('Invalid characters in expression');
    });
});