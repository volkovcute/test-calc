const Parser = require('./parser');

class Calculator {
    constructor() {
        this.parser = new Parser();
    }

    calculate(expression) {
        const parsedExpression = this.parser.parse(expression);
        return this.evaluate(parsedExpression);
    }

    evaluate(expression) {
        try {
            return new Function(`return ${expression}`)();
        } catch (e) {
            throw new Error('Invalid mathematical expression');
        }
    }
}

module.exports = Calculator;