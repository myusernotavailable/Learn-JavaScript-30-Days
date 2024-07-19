/* Activity 1: Arithmatic Operaters;
    
Task 1 */

function addTwoNumbers(a, b) {
  return a + b;
}

const number1 = 4;
const number2 = 6;

console.log(addTwoNumbers(number1, number2));

//Task 2 Subtraction

function subtractNumbers(a, b) {
  return a - b;
}

const a = 10;
const b = 4;

console.log(subtractNumbers(a, b));

// Task 3 Multiplication

function multiply(a, b) {
  return a * b;
}

const randomN1 = 5;
const randomN2 = 5;

console.log(multiply(randomN1, randomN2));

//Task 4 Division

function division(a, b) {
  return a / b;
}

const divisionNumber1 = 25;
const divisionNumber2 = 5;

console.log(division(divisionNumber1, divisionNumber2));

// Task 5 Remainder

function remainder(a, b) {
  return a % b;
}

const remainder1 = 45;
const remainder2 = 4;

console.log(remainder(remainder1, remainder2));

/* Activity 2 Assignment Operaters
  Task 6*/

let number3 = 4;
number3 += 14;
console.log(number3);

//Task 7
let number4 = 15;

number4 -= 10;
console.log(number4);

/* Actvity 3 Comparison Operators
  Task 8 */
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num1 < num2) {
    console.log(num1 + " is less than " + num2);
  } else {
    console.log(num1 + " is equal to " + num2);
  }
}

let number5 = 110;
let number6 = 110;
compareNumbers(number5, number6);

// Task 9

function compareNumbers(num1, num2) {
  if (num1 >= num2) {
    console.log(num1 + " is greater than or equal to " + num2);
  } else {
    console.log(num1 + " is less than " + num2);
  }
}

let num1 = 110;
let num2 = 1110;
compareNumbers(num1, num2);
