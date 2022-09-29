// JavaScript Fundamentals – Part 1
// LESSON 16. Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)
// mass in kg and height in meter.

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula, you can even implement both versions
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBmi = markWeight / markHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;

console.log("Data 1:");
console.log("Mark BMI: ", markBmi);
console.log("John BMI: ", johnBmi);
console.log("Mark has a higher BMI: ", markHigherBMI);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

let markBmi2 = markWeight / markHeight ** 2;
let johnBmi2 = johnWeight / johnHeight ** 2;

let markHigherBMI2 = markBmi2 > johnBmi2;

console.log();
console.log("Data 2:");
console.log("Mark's BMI: ", markBmi2);
console.log("John's BMI: ", johnBmi2);
console.log("Mark has a higher BMI: ", markHigherBMI2);
