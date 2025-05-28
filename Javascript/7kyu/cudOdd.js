//PREP
// FInd the sum of the odd numbers within an array, after cubing the initial integers. Return undefined if the values are not numbers
// P ----> array of numbers
// R ----> number
//E

function cubeOdd(arr) {
  // check and return undefined for the elements that are not numbers
  // chcked and return odd numbers
  // cube them and sum them
  if (!arr.every((element) => typeof element == "number")) {
    return undefined;
  } else {
    return arr
      .filter((element) => element % 2 !== 0)
      .reduce((acc, c) => acc + c ** 3, 0);
  }
}

console.log(cubeOdd([1, 3, 5])); // [1, 3, 5]--> 153
console.log(cubeOdd([2, 4, 6])); // [2, 4, 6] --> 0
console.log(cubeOdd([1, 2, 3, 4])); // [1, 2, 3, 4, 5] -->153
console.log(cubeOdd([1, "3", 5])); // [1, '3', 5] --> undefined
