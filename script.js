let result;

const operator = prompt('Enter operator ( choose +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         alert(result = number1 + number2);
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        alert(result = number1 - number2);
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         alert(result = number1 * number2);
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        alert(result = number1 / number2);
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
