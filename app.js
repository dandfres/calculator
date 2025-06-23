const keyboard = document.querySelector('.keyboard');
const input = document.querySelector('.input');
const preview = document.querySelector('.preview');

let operator1 = '';
let operator2 = '';
let operating = null;
let resultDisplayed = false;

keyboard.addEventListener('mouseup', (event) => {
    const btn = event.target.closest('button');
    if (!btn) return;

    const value = btn.textContent
    
    if (value === 'clear') {
        input.textContent = '';
        preview.textContent = '';
        operator1 = '';
        operator2 = '';
        operating = null;
        resultDisplayed = false;

    } else if (['+', '-', '÷', 'x'].includes(value)) {
        operator1 = input.textContent;
        operating = value;
        input.textContent = '';
        preview.textContent += value
    } else if (value === '=' ) {
        operator2 = input.textContent;
        const result = operate(operator1, operator2, operating);
        input.textContent = result;
        resultDisplayed = true
    } else {
        if (resultDisplayed) {
            input.textContent = '';
            resultDisplayed = false;
        } else {
            input.textContent += value;
            preview.textContent += value
        }
    }
})

const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const operations = {
    '+': addition,
    '-': subtraction,
    'x': multiplication,
    '÷': division,
}

const operate = (num1, num2, operator) => {
    num1 = Number(num1);
    num2 = Number(num2);
    const operation = operations[operator];
    return operation ? operation(num1, num2) : "Error";
}