// An array of integers(x), and a target(t), you must find out
//  if any two consecutive numbers in the array sum to t.
// If so, remove the second number

//P --> array of numbers, and int
// R ---> array

function trouble(x, t) {
  // P
  //  check if array at index 0 + array at index 1 = array index 2
  // if so remove array at index 1
  // return the array

  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] == t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

// E
console.log(trouble([1, 2, 3, 4, 5], 3)); // ---> [1,3,4,5]
