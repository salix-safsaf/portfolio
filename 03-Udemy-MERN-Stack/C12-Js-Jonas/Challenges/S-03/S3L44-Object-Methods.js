// JavaScript Fundamentals – Part 2
// LESSON 44. Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],

  birthYear: 1991,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  hasDriversLicense: false,
  checkingLicense: function () {
    if (this.hasDriversLicense) {
      this.license = "has a driver's license";
      return this.license;
    } else {
      this.license = "has No driver's license";
      return this.license;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${this.checkingLicense()}`;
  },
};

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.calcAge()); // استدعاء الدالة
console.log(jonas.age); // jonas.age مهم: يجب استدعاء الدالة أولا حتى تظهر هذه قيمة

console.log(jonas.getSummary());

// getSummary: function () {return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`}
