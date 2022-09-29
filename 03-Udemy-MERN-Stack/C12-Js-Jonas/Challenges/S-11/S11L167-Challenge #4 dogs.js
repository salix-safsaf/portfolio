// Working With Arrays
// LESSON 167. Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// TASK: 1.
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
// Forumla: recFood = weight ** 0.75 * 28.
// (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log('------- Dogs recFood -------');
console.log(dogs);
console.log();

// TASK: 2.
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log('------- Sarah Doog Food -------');
console.log(dogSarah);
console.log(
  `Sarah's Dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? '(🍖🍗🍖🍗🍖 Much!)' : '(🍗 Little!)'
  }`
);
console.log();

// TASK: 3.
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log('------- TooMuch vs. TooLittle -------');
console.log('ownersEatTooMuch:', ownersEatTooMuch);
console.log('ownersEatTooLittle:', ownersEatTooLittle);
console.log();

// TASK: 4.
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log('------- String -------');

console.log(
  `"${ownersEatTooMuch.join(
    ' and '
  )}'s dogs eat too much!"\nand "${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too little!".`
);
console.log();

// TASK: 5.
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log('------- EXACTLY Food -------');
console.log(
  `Is there any dog eating EXACTLY the amount of food that is recommended? (${dogs.some(
    dog => dog.curFood === dog.recFood
  )}).`
);
console.log();

// TASK: 6.
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

console.log('------- OKAY Food -------');
const okayFood = dog =>
  dog.curFood <= dog.recFood + dog.recFood * 0.1 &&
  dog.curFood >= dog.recFood + dog.recFood * -0.1;

console.log(
  `Is there is any dog eating an OKAY amount of food? (${dogs.some(okayFood)}).`
);
console.log();

// TASK: 7.
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const okayArray = dogs.filter(okayFood);

console.log('------- OKAY Array -------');
console.log(okayArray);
console.log();

// TASK: 8.
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const sortedRecFood = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log('------- Sorted Array -------');
console.log(sortedRecFood);
console.log();
