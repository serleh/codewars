// PREP
// An array of sheeps where some sheeps may be missing. A function that counts the number of sheeps present (true means present)

// P ---> array of boolean value
// R---> An interger
// E

function countSheeps(sheeps) {
  // loop through the array
  // return the count if true(present)
  let sum = 0;
  // for (let i = 0; i < sheeps.length; i++) {
  //   if (sheeps[i] === true) {
  //     sum++;
  //   }
  // }
  // return sum;
  // return sheeps.filter((sheep) => sheep === true).length;
  return sheeps.filter(Boolean).length;
}

//E
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // --> 17
