/* Practical Exercises
Use var, let, and const:

Declare a variable with each type (var, let, and const) and print them to the console.
Scope Exploration:

Create a block of code (e.g., an if statement) and declare variables inside it with let and const. Try accessing those variables outside the block.
Hoisting and Errors:

Experiment with hoisting by trying to use variables before they are declared with var, let, and const.
Variable Re-declaration:

Try re-declaring and re-assigning variables with var, let, and const to see the differences.

*/

//Declare a variable with each type (var, let, and const) and print them to the console.
var product = "laptop";
let colour = "blue";
const age = 32;
console.log(product);
console.log(colour);
console.log(age);

//Create a block of code (e.g., an if statement) and declare variables inside it with let and const.
//Try accessing those variables outside the block.

function scopedExample() {
  if (true) {
    let blockLet = "Inside block";
    const blockConst = "Inside block";

    console.log(blockLet);

    console.log(blockConst);
  }
}
