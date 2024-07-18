//Task 1

var one = 1;
console.log(one);

//Task 2

let word = "Hello, World!";
console.log(word);

//Constant Declclsaration

const doYouKnowJavaScript = true;
console.log(doYouKnowJavaScript);

//Data Types
const number = 1;
const string = "Hello, World!";
const areYouOk = true;
const array = [1, 2, 3, 4, 5];
const student = {
  studentName: "Imran",
  age: 30,
  id: 2078,
};

console.log(typeof number);
console.log(typeof string);
console.log(typeof areYouOk);
console.log(typeof array);
console.log(typeof student);

//Understanding Const: Reassign Value

// const student = "Imran";
// console.log(student);

// SyntaxError: Identifier 'student' has already been declared. So we cannot reassing a value to a const variable.

// We can reassign value to variable using let keyword.

let password = "Imran@2089";
console.log(password);

//Reassigning value

password = "Ali@2078";
console.log(password);

// We cannot reassign value to variable using const keyword.

const playerName = "Imran";
console.log(playerName);

playerName = "Ali";
console.log(playerName);
