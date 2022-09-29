// JavaScript Fundamentals – Part 2
// LESSON 43. Dot vs. Bracket Notation

const personalInfo = {
  firstName: "Safy",
  lastName: "Hejazy",
  age: 20,
  job: "teacher",
  friends: ["Najwan", "Rehab", "Wessam", "Rabab", "Abd-Alrahman"],
};

// Challenge
// "(Jonas) has (3) friends, and his best friend is called (Michael)"

console.log(
  `(${personalInfo.firstName}) has (${personalInfo.friends.length}) friends, and her best friend is called (${personalInfo.friends[0]})`
);
