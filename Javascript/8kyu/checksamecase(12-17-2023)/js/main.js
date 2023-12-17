// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// SOLUTION

// P- >  two characters
// R  -> number
// E   'a' and 'g' returns 1,   'b' and 'G' returns 0,  '0' and '?' returns -1
// P

function checkCharacters(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

let test1 = checkCharacters('a', 'g'); // 1
let test2 = checkCharacters('A', 'C'); // 1
let test3 = checkCharacters('b', 'G'); // 0
let test4 = checkCharacters('O', '?'); // -1

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
