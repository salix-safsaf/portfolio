// JavaScript Fundamentals – Part 2
// LESSON 50. Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values. ✅
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals'). ✅
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. ✅
// Use a for loop to perform the 10 calculations! ✅

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 ✅

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉 ✅

// 4. BONUS: ✅
// Write a function 'calcAverage' which takes an array called 'arr' as an argument.
// This function calculates the average of all numbers in the given array.
// This is a DIFFICULT challenge (we haven't done this before)!

// Here is how to solve it:
// 1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const calcTip = function (i) {
    return bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
  };
  tips.push(calcTip(i));
  const calcTotal = function (i) {
    return bills[i] + tips[i];
  };
  totals.push(calcTotal(i));
}

let calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log("tips =", tips);
console.log("totals", totals);

console.log(`Bills avarage is ${calcAverage(bills)}`);
console.log(`Tips avarage is ${calcAverage(tips)}`);
console.log(`Totals avarage is ${calcAverage(totals)}`);
