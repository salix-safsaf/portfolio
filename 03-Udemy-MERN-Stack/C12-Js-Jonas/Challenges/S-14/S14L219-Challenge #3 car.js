// SECTION 14: OOP
// LESSON 219. Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// Section: Car Prototype
const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log('accelerate by 10 ⬆⬆:', this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `brake by 5 ⬇: ${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

/////////////////////////////////////////////

// Section: Electric Car Prototype

// TASK: 1.
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
// Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;

// TASK: 2.
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Charging Battery to: ${this.charge}%`);
};

// TASK: 3.
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `accelerate by 20 ⬆⬆⬆⬆: ${this.make} going at ${this.speed} km/h, with a charge ⬇ of ${this.charge}%`
  );
};

// TASK: 4.
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
// Notice what happens when you 'accelerate'!
// HINT: Review the definiton of polymorphism 😉
// DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Tesla = new Ev('Tesla', 120, 23);
Tesla.chargeBattery(90);
Tesla.accelerate();
Tesla.brake();
Tesla.accelerate();
Tesla.brake();
Tesla.accelerate();
Tesla.brake();
