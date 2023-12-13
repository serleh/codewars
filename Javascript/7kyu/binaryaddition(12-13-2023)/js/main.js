// Implement a function that adds two numbers together and returns their sum in binary.
//  The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//  SOLUTION
// P -> numbers (2 numbers)
// R -> sum of the numbers in binary(string)
// E -> :

// function addBinary(num1, num2) {
//   //add num1 and num2
//   //return the sum in binary
//   let sum = num1 + num2;
//   sum = sum.toString(2);

//   return sum;
// }
const addBinary = (a, b) => (a + b).toString(2);

addBinary(1, 1); //'10'
addBinary(5, 9); // '1110'
