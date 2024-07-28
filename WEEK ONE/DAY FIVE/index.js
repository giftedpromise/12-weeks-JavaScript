/*

Day 5: Operators in JavaScript
Operators in JavaScript are used to perform operations on values and variables. 
Here’s a breakdown of the key types of operators you’ll encounter:
1. Arithmetic Operators
Addition (+): Adds two operands.
*/ let sum = 1 + 2;

//subtraction (-): substracts two operands.
let difference = 8 - 6;

//Multiplication (*): Muktiplys two operands.
let product = 7 * 8;

//Division (/): Divides the first operand by the second.
let quotient = 6 / 3; // 2

//Modulus (%): Returns the remainder of division.
let remainder = 5 % 3; // 2

//Exponentiation (**): Raises the first operand to the power of the second.
let power = 2 ** 3; // 8

//2. Assignment Operators

//Assignment (=): Assigns a value to a variable.
let x = 10;

//Addition Assignment (+=): Adds and assigns the result.
let y = 10;
y += 5; // y is now 15

//Subtraction Assignment (-=): Subtracts and assigns the result.
let z = 10;
z -= 5; // z is now 5

//Multiplication Assignment (*=): Multiplies and assigns the result.
let a = 10;
a *= 2; // a is now 20

//Division Assignment (/=): Divides and assigns the result.
let b = 10;
b /= 2; // b is now 5

//Modulus Assignment (%=): Applies modulus and assigns the result.
let c = 10;
c %= 3; // c is now 1

/* 3. Comparison Operators
Equal to (==): Compares values for equality (type coercion).

*/
let isEqual = 5 == "5"; // true

//Strict equal to (===): Compares values and types for equality.
let isStrictEqual = 5 === "5"; // false

//Not equal to (!=): Compares values for inequality (type coercion).
let isNotEqual = 5 != "6"; // true

//Strict not equal to (!==): Compares values and types for inequality.
let isStrictNotEqual = 5 !== "5"; // true

//Greater than (>): Checks if the left operand is greater than the right operand.
let isGreater = 5 > 3; // true

//Less than (<): Checks if the left operand is less than the right operand.
let isLess = 5 < 3; // false

//Greater than or equal to (>=): Checks if the left operand is greater than or equal to the right operand.
let isGreaterOrEqual = 5 >= 5; // true

//Less than or equal to (<=): Checks if the left operand is less than or equal to the right operand.
let isLessOrEqual = 5 <= 3; // false

/* Booleans
A boolean data type represents one of the two values:true or false.
 Boolean value is either true or false.
  The use of these data types will be clear when you start the comparison operator.
 Any comparisons return a boolean value which is either true or false.

 */

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

/*
Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string


Logical Operators
The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). 
The && operator gets true only if the two operands are true.
 The || operator gets true either of the operand is true. 
The ! operator negates true to false and false to true.
*/

// && ampersand operator example

const check = 4 > 3 && 10 > 5; // true && true -> true
const check4 = 4 > 3 && 10 < 5; // true && false -> false
const check5 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check1 = 4 > 3 || 10 > 5; // true  || true -> true
const check2 = 4 > 3 || 10 < 5; // true  || false -> true
const check3 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check6 = 4 > 3; // true
let check7 = !(4 > 3); //  false
let isLightOn1 = true;
let isLightOff = !isLightOn; // false
let isMarried1 = !false; // true
