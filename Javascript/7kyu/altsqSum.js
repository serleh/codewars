// A function that takes an  array of integers as input and finds the sum of sqaures of the
// element at even position, plus the sum of the rest of the elements at odd position.

//P ---> Array of numbers
// R ---> Int

function alternateSqSum(arr) {
  return arr.reduce((acc, c, index) => {
    return index % 2 !== 0 ? acc + c ** 2 : acc + c;
  }, 0);
}

console.log(alternateSqSum([11, 12, 13, 14, 15])); // ---> 379
