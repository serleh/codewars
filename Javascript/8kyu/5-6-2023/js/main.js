// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// SOLUTION


// P -> random posotive numbers
// R ->  array in reverse Form
// E - >  35231 => [1,3,2,5,3]
// p ->

// Create a function that accept an array
// reverse the array and return it

// function reversedArray(array){
//     if(array.length > 1){
//         return array.reverse()
//     }
//     else {
//         return String(array).split('').map(Number)
//     }
    
// }

function digitize(n) {
    //code here
     
          return String(n).split('').map(Number).reverse()
      
  }

console.log(digitize([3,5,2,3,1]))
console.log(digitize(0))