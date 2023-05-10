// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// SOLUTION

// P- intergers
// R -  product of all
// E -  [5,6,7,8,9] => 5*6*7*8*9 = 15120
// P -
    
// Create a function that accept an Array
//  multiply the values and return the result

function multiplyArrayValues(arr){
     return arr.reduce((acc, c)=> acc* c,1)
}

console.log(multiplyArrayValues([5,6,7,8,9]))