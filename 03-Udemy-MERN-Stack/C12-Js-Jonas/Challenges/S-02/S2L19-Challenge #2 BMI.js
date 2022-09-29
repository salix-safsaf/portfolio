// JavaScript Fundamentals – Part 1
// LESSON 19. Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.
// The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

let marksWeight = 78;
let marksHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let marksBmi = marksWeight / marksHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

if (marksBmi > johnBmi) {
  console.log(`Mark's BMI ${marksBmi} is higher than John's ${johnBmi}!`);
} else {
  console.log(`John's BMI ${johnBmi} is higher than Mark's ${marksBmi}!`);
}
