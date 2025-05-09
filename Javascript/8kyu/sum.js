// PREP
// A function that takes in array of numbers and return the sum of the numbers

// P -> array of numbers
// R - > number
// E

function sum(numbers) {
  // create a sum var
  // loop through the array
  // add the current value of i to sum
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }
  //   return sum;

  return numbers.reduce((acc, c) => acc + c, 0);
}

console.log(sum([1, 5.2, 4, 0, -1])); // -> 9.2
console.log(sum([])); // -> 0
console.log(sum([-2.398])); // -> -2.398
