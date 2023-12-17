// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// P > array of numbers
// R > array
// E >  [97, 101, 105, 111, 117] -> ['a','e', 'i','0','u']
//      [97, 1, 2,4,117] -> ['a', 1,2,4,'u']

const vowels = {
  97: 'a',
  101: 'e',
  105: 'i',
  111: 'o',
  117: 'u',
};

function isVow(a) {
  return a.map((num) => vowels[num] || num);
}

let test1 = isVow([97, 101, 105, 111, 117]); // ['a','e', 'i','0','u']
let test2 = isVow([97, 1, 2, 4, 117]); // ['a', 1,2,4,'u']

console.log(test1);
console.log(test2);
