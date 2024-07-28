/* Practice Questions
1. String Manipulation
Question: Create a string that includes your name and age. Use template literals to format the string.
*/
let myName = "Promise";
let myAge = 32;

let introduction = `Hello, my name is ${myName}, I am ${myAge} years old.`;

/*
2. Number Operations
Question: Perform basic arithmetic operations
 (addition, subtraction, multiplication, division) on two numbers and print the results.
*/

let num1 = 6;
let num2 = 8;

let sum = num1 + num2;
let sub = num2 - num1;
let pro = num1 * num2;
let div = num2 / num1;

console.log("Sum:", sum); // Sum: 15
console.log("Difference:", sub); // Difference: 5
console.log("Product:", pro); // Product: 50
console.log("Quotient:", div); // Quotient: 2

/* 
3. Boolean Logic
Question: Create a Boolean variable that represents whether a number is greater than 10.
 Use an if statement to print a message based on the Boolean value.
*/

let x = 6;

let z = x > 10;
console.log(z);

if (z) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is 10 or less.");
}

let number = 15;
let isGreaterThan10 = number > 10;

if (isGreaterThan10) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is 10 or less.");
}

/*
4. Null and Undefined
Question: Declare a variable with null and another with undefined. 
Compare them using the == and === operators and print the results.
*/

let nullValue = null;
let undefinedValue;

console.log(nullValue == undefinedValue);
console.log(nullValue === undefinedValue);

/* 
5. Type Conversion
Question: Convert a number to a string and a string to a number, and print the results
*/

let num = 123;
let str = "345";

let numToStr = num.toString();
let strToNum = Number(str);

console.log(numToStr);
console.log(strToNum);
