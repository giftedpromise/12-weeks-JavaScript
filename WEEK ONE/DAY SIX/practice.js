/* 

Practice Questions
1. Age Checker
Question: Write a program that checks if a person is a child, teenager, or adult based on their age. */

let age = 20;

if (age <= 13) {
  console.log("this person is a child");
} else if (age <= 17) {
  console.log("this person is a teenager");
} else {
  console.log("This person is an adult");
}

let newAge = 7;

let message =
  age <= 13
    ? "this person is a child"
    : age <= 17
    ? "this person is a teenager"
    : "This person is an adult";

console.log(message);

/*
2. Weather Recommendation
Question: Write a program that provides a recommendation based 
on the weather condition (sunny, rainy, or cloudy).
*/

let weather = "rainy";

if (weather === "sunny") {
  console.log("Wear sunglasses and a hat.");
} else if (weather === "rainy") {
  console.log("Take an umbrella and wear rain boots.");
} else if (weather === "cloudy") {
  console.log("Wear a light jacket.");
} else {
  console.log("Weather condition unknown.");
}

/* 3. Grade Evaluation
Question: Write a program that evaluates a student’s grade based 
on their score using a switch statement.

*/

let score = 78;

switch (score) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  case score >= 50:
    console.log("Grade: E");
    break;
  default:
    console.log("Grade: F");
    break;
}

/*
4. Menu Selection
Question: Write a program that displays a menu and performs an action based on the user’s choice.
*/

let choice = 3;

switch (choice) {
  case 1:
    console.log("You selected Pizza.");
    break;
  case 2:
    console.log("You selected Snacks.");
    break;
  case 3:
    console.log("You selected Burger.");
    break;
  case 4:
    console.log("You selected Salad.");
    break;
  case 5:
    console.log("You selected Pasta.");
    break;
  default:
    console.log("Invalid selection");
    break;
}
