// Developer Skills & Editor Setup
// LESSON 62. Coding Challenge #1

// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with these temperatures.
// Example: [17, 21, 23]
// Will print: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework:
// Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// - array of forecasted maximum temperatures ✅
// - function 'printForecast' ✅
// - an array 'arr' as argument ✅
// - iterate ✅
// - logs a string to the console ✅

// 2) Breaking up into sub-problems
// - iterate over array javascript ✅
// - Template literals javascript ✅

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let data = `... `;
  for (i = 0; i < arr.length; i++) {
    let dataPeace = `${arr[i]}ºC in ${i + 1} days ...`;
    data += dataPeace;
  }
  console.log(data);
};

console.log("Test Data - 1:");
printForecast(testData1);
console.log();
console.log("Test Data - 2:");
printForecast(testData2);
