/* 
Day 6: Conditional Statements in JavaScript
Conditional statements allow you to execute code based on certain conditions. 
They are fundamental for controlling the flow of your program.

Conditional statements are used for make decisions based on different conditions. By default ,
 statements in JavaScript script executed sequentially from top to bottom. 
 If the processing logic require so, the sequential flow of execution can be altered in two ways:

Conditional execution: a block of one or more statements will be executed if a certain expression is true
Repetitive execution: a block of one or more statements will be repetitively
 executed as long as a certain expression is true.

 Conditions can be implementing using the following ways:

1. if
2. if else
3. if else if else
4. switch
5. ternary operator

1.If
In JavaScript and other programming languages the key word if is to used check
 if a condition is true and to execute the block code. To create an if condition, we need if keyword,
 condition inside a parenthesis and block of code inside a curly bracket({}).

*/

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}
//  3 is a positive number

let isRaining = true;
if (isRaining) {
  console.log("Remember to take your rain coat.");
}

let age = 18;
if (age >= 18) {
  console.log("You are now an adult");
}

/* 2. If else Statement
The else statement executes a block of code if the condition in the if statement evaluates to false.
If condition is true the first block will be executed, if not the else condition will be executed.

*/

let num1 = 3;
if (num1 > 0) {
  console.log(`${num1} is a positive number`);
} else {
  console.log(`${num1} is a negative number`);
}
//  3 is a positive number

num1 = -3;
if (num1 > 0) {
  console.log(`${num1} is a positive number`);
} else {
  console.log(`${num1} is a negative number`);
}
//  -3 is a negative number

let age1 = 16;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

/* 3. else if Statement
The else if statement lets you check multiple conditions. 
It executes a block of code if its condition is true and all previous conditions were false.

syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
*/

let score = 85;

if (score >= 90) {
  conslole.log("You got Grade A");
} else if (score >= 80) {
  conslole.log("You got Grade B");
} else if (score >= 70) {
  conslole.log("You got Grade B");
} else {
  conslole.log("You got Grade D");
}

// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

/*
4. switch Statement
The switch statement evaluates an expression and executes the corresponding 
case block based on the value of the expression.Switch is an alternative for if else if else else. 
The switch statement starts with a switch keyword followed by a parenthesis and code block.
 Inside the code block we will have different cases. 
 Case block runs if the value in the switch statement parenthesis matches with the case value.
  The break statement is to terminate execution so the code execution does not go down 
  after the condition is satisfied. 
The default block runs if all the cases don't satisfy the condition.

switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
*/

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

let weather1 = "cloudy";

switch (weather1) {
  case rainy:
    console.log("You need a rain coat.");
    break;
  case cloudy:
    console.log("It might be cold, you need a jacket.");
    break;
  case sunny:
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

/* Ternary Operators
Ternary operator allows to write a condition. 
Another way to write conditionals is using ternary operators. 
It provides a shorthand way to perform conditional operations. 
The ternary operator is a more concise form of the if-else statement and 
is often used for simple conditional expressions.
condition ? expression1 : expression2;
condition: This is the expression that is evaluated to true or false.
expression1: This is the value or expression that is returned if the condition is true.
expression2: This is the value or expression that is returned if the condition is false.

Look at the following examples:
1. Basic Example
*/

let newAge = 18;

newAge >= 18
  ? console.log("You are not an adult")
  : console.log("You are an adult");

//Nested Ternary operation

let newScore = 85;

let grade =
  newScore >= 90
    ? "You got an A"
    : newScore >= 80
    ? "You got an B"
    : newScore >= 70
    ? "You got an C"
    : "You got an D";

console.log("Grade:", grade);

//Using Ternary Operator for Simple Assignments

isLoggedIn = true;
let userStatus = isLoggedIn ? "logged in" : "logged out";
console.log(userStatus);
