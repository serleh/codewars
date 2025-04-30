// PREP
// An array of numbers, return sum of all the positive numbers

//P --> array of numbers()
// Return ---> sum of POS numbers
// Example

function sumOfPos(numbers) {
  // filter Posive numbers
  // sum them and return result
  // if  no pos ---> return 0

  // const postive = numbers.filter((number) => number >= 0);
  // const sum = postive.reduce((acc, c) => acc + c, 0);
  // return sum;

  return numbers.filter((number) => number >= 0).reduce((acc, c) => acc + c, 0);
}

// Test
console.log(sumOfPos([1, -4, 7, 12])); // ---> 1 + 7 + 12 = 20
console.log(sumOfPos([0, -2, -3, 1, 4])); // -----> 0 + 1 + 4 = 5
console.log(sumOfPos([-1, -3, -4])); /// ------------> 0
