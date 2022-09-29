// SECTION 14: OOP
// LESSON 227. Coding Challenge #4

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// Section: Car Class.
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log('accelerate by 10 ⬆⬆:', this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log('brake by 5 ⬇:', this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// Section: Electric Car Class.

class EvCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Charging Battery to: ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `accelerate by 20 ⬆⬆⬆⬆: ${this.make} going at ${
        this.speed
      } km/h, with a charge ⬇ of ${this.#charge}%`
    );
    return this;
  }
}

const Rivian = new EvCl('Rivian', 120, 23);

Rivian.chargeBattery(90).accelerate().brake();
