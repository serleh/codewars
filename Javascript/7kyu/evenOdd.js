// Given a list of integers, determine whether the sum of it's element is 'odd' or 'even'
// if the input array is empty consider it as xero

// P ---> Array of numbers
//R ----> A string ('even' or 'odd')

function oddOrEven(array) {
  // R --> sum the array
  // check if it's divisible by 2 and return a string

  // let sum = array.reduce((acc, c) => acc + c, 0);
  // if (sum % 2 === 0) {
  //   return "even";
  // } else {
  //   return "odd";
  // }
  return array.reduce((acc, c) => acc + c, 0) ? "even" : "odd";
}

// E
console.log(oddOrEven([0])); // ---> 'even
console.log(oddOrEven([0, 1, 4])); //--> 'odd'
console.log(oddOrEven([0, -1, -5])); // -->'even'
