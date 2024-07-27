/*
For Day 3, you’ll be focusing on JavaScript variables, specifically the different
 ways to declare them: var, let, and const. Here’s a guide to understanding and using these variable declarations:

1. var
Scope: Function-scoped. Variables declared with var are accessible throughout
 the function in which they are declared, but not outside of it.

Hoisting: var declarations are hoisted to the top of their scope. 
This means you can use them before they are declared in the code.
*/
function example() {
  console.log(x); // undefined, because `x` is hoisted
  var x = 10;
  console.log(x); // 10
}
example();

//Re-declaration: You can re-declare variables within the same scope.
var x = 10;
var x = 20; // No error, `x` is re-declared
console.log(x); // 20

/* 2. let
Scope: Block-scoped. Variables declared with let are only accessible
 within the block {} in which they are declared, such as within a for loop or if statement.

Hoisting: let declarations are hoisted, but not initialized.
 Trying to access a let variable before its declaration will result in a ReferenceError.

*/

function example1() {
  //console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // 10
}
example1();

//Re-declaration: You cannot re-declare a let variable within the same scope.
/* let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared


3. const
Scope: Block-scoped, similar to let.

Hoisting: const declarations are hoisted, but not initialized. 
Accessing them before their declaration will result in a ReferenceError.
*/

function example3() {
  //console.log(x); // ReferenceError: Cannot access 'x' before initialization
  const x = 10;
  console.log(x); // 10
}
example3();

/*Re-declaration: You cannot re-declare or re-assign a const variable within the same scope.
 Once a const variable is assigned, it cannot be changed.
 const x = 10;
x = 20; // TypeError: Assignment to constant variable

*/
