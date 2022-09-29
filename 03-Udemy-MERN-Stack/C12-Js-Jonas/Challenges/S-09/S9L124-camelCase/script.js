// Data Structures, Modern Operators and Strings
// LESSON 124. Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let step1 = text.toLowerCase().split('\n');

  let i = 1;
  for (const item of step1) {
    let indexing = item.indexOf('_') + 1;

    // 1st part
    let step2 = item.slice(0, item.indexOf('_'));

    // camel part
    if (item !== '') {
      let step3 = item[indexing].toUpperCase() + item.slice(indexing + 1);

      // Join Words
      let step4 = [step2, step3].join('');
      let step5 = step4.padEnd(20, ' ');

      // add ✅
      let step6 = [step5, '✅'.repeat(i++)].join('');
      console.log(step6);
    }
  }
});

/*
// Afterwards, test with your own test data!
safYYY_mbrook
moHsen_hejazy
yahia_abduLLah
*/
