// JavaScript Fundamentals – Part 1
// LESSON 25. Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas.
// They compete against each other 3 times.
// The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below ✅
// 2. Compare the team's average scores to determine the winner of the competition ✅
// print it to the console ✅
// Don't forget that there can be a draw (they have the same average score) so test for that as well ✅

// Bonus 1: ✅
// Include a requirement for a minimum score of 100.
// With this rule, a team only wins if it has:
// - a higher score than the other team,
// - and the same time a score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

// Bonus 2: ✅
// Minimum score also applies to a draw! So a draw only happens when:
// - both teams have the same score
// - and both have a score greater or equal 100 points.
// - Otherwise, no team wins the trophy

// .................................................

// Data Main Task:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// const dolphinAverageScore = (96 + 108 + 89) / 3;
// const koalaAverageScore = (88 + 91 + 110) / 3;

// console.log('dolphinAverageScore = ', dolphinAverageScore)
// console.log('koalaAverageScore = ', koalaAverageScore)

// if (dolphinAverageScore > koalaAverageScore) {
//   console.log("Dolphins 🐬 are the winners 🏆");
// } else if (dolphinAverageScore < koalaAverageScore) {
//   console.log("Koalas 🦥 are the winners 🏆");
// } else {
//   console.log("The match is DRAWN! ⏸");
// }

// .................................................

// Data Bonus 1:
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// const dolphinAverageScore = (97 + 112 + 101) / 3;
// const koalaAverageScore = (109 + 95 + 123) / 3;

// console.log("dolphinAverageScore = ", dolphinAverageScore);
// console.log("koalaAverageScore = ", koalaAverageScore);

// if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
//   console.log("Dolphins 🐬 are the winners 🏆");
// } else if (
//   dolphinAverageScore < koalaAverageScore &&
//   koalaAverageScore >= 100
// ) {
//   console.log("Koalas 🦥 are the winners 🏆");
// } else {
//   console.log("The match is DRAWN! ⏸");
// }

// .................................................

// Data Bonus 2:
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinAverageScore = (97 + 112 + 101) / 3;
const koalaAverageScore = (109 + 95 + 106) / 3;

console.log("dolphinAverageScore = ", dolphinAverageScore);
console.log("koalaAverageScore = ", koalaAverageScore);

if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
  console.log("Dolphins 🐬 are the winners 🏆");
} else if (
  dolphinAverageScore < koalaAverageScore &&
  koalaAverageScore >= 100
) {
  console.log("Koalas 🦥 are the winners 🏆");
} else if (
  dolphinAverageScore === koalaAverageScore &&
  dolphinAverageScore >= 100 &&
  koalaAverageScore >= 100
) {
  console.log("The match is DRAWN! ⏸ BUT 🎈 Both teams 🎈 win the trophy 🏆🏆");
} else if (
  dolphinAverageScore === koalaAverageScore &&
  dolphinAverageScore >= 100 &&
  koalaAverageScore <= 100
) {
  console.log("The match is DRAWN! ⏸ BUT Dolphins 🐬 wins the trophy 🏆");
} else if (
  dolphinAverageScore === koalaAverageScore &&
  dolphinAverageScore <= 100 &&
  koalaAverageScore >= 100
) {
  console.log("The match is DRAWN! ⏸ BUT Koalas 🦥 wins the trophy 🏆");
} else if (
  dolphinAverageScore === koalaAverageScore &&
  dolphinAverageScore <= 100 &&
  koalaAverageScore <= 100
) {
  console.log("The match is DRAWN! ⏸ NO ONE wins the trophy ⛔");
}
