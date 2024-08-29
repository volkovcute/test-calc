class Parser {
    parse(expression) {
        expression = expression.replace(/\s+/g, '');
        if (!/^[\d+\-*/().]+$/.test(expression)) {
            throw new Error('Invalid characters in expression');
        }
        return expression;
    }
}

module.exports = Parser