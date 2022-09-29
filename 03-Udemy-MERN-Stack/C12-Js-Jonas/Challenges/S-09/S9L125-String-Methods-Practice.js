// Data Structures, Modern Operators and Strings
// LESSON 125. String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// _Delayed_Departure;fao93766109;txl2133758440;11:25+ / 8:10
// _Arrival;bru0943384722;fao93766109;11:45+ / 10:8
// _Delayed_Arrival;hel7439299980;fao93766109;12:05+ / 10:8
// _Departure;fao93766109;lis2323639855;12:30 / 8:10

const flightsArray = flights.split('+');

for (const item of flightsArray) {
  let indexSemiFrist = item.indexOf(';');
  let indexSemiLast = item.lastIndexOf(';');

  if (item.includes('Departure')) {
    let part1 = item.includes('Delayed') ? '🔴 Delayed Departure' : 'Departure';
    let part2 = item
      .slice([indexSemiFrist + 1], [indexSemiFrist + 4])
      .toUpperCase();

    let part3 = item
      .slice([indexSemiLast - 13], [indexSemiLast - 10])
      .toUpperCase();

    let part4 = item.slice(-5).replace(':', 'h');

    let final = `${part1} from ${part2} to ${part3} (${part4})`.padStart(45);

    console.log(final);
  } else {
    part1 = item.includes('Delayed') ? '🔴 Delayed Arrival' : 'Arrival';
    part2 = item
      .slice([indexSemiFrist + 1], [indexSemiFrist + 4])
      .toUpperCase();

    part3 = item.slice([indexSemiLast - 11], [indexSemiLast - 8]).toUpperCase();

    part4 = item.slice(-5).replace(':', 'h');

    final = `${part1} from ${part2} to ${part3} (${part4})`.padStart(45);

    console.log(final);
  }
}
