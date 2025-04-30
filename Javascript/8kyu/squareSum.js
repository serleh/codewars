// PREP
// A function that accepts array and square each element in the array, then sum the result together.

// P ---> numbers( in array)
// R ---> number
// E

function squareSum(numbers) {
  // loop throuh the array
  // square each element
  // sum them

  return numbers.map((number) => number ** 2).reduce((acc, c) => acc + c, 0);
}

// TEST
console.log(squareSum([1, 2, 2])); // ----> 9
console.log(squareSum([0, 3, 4, 5])); // ---> 50
console.log(squareSum([])); // ----> 0
console.log(squareSum([10])); //----> 100
console.log(squareSum([-1, -2])); // ---> 5
