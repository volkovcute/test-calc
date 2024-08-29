const Calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

rl.question('Введите выражение: ', (expression) => {
    try {
        const result = calculator.calculate(expression);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close();
    }
});