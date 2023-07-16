// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// SOLUTION

// function findAverage(array) {
//      // your code here
//       if(typeof array !== 'undefined' && array.length === 0){
//          return 0
//       }
//      else{
//        let theAverage = array.reduce((acc,c)=>{
//              return acc + c
//         },0)
//       return theAverage / array.length
//      }
     
//    }

function findAverage(array){
     return array.length > 0 ? array.reduce((acc,c) => acc + c) / array.length: 0
}

console.log(findAverage([]),0)










//step 1 - declare an array of numbers

// let numbers = [2,3,3,5,7,10]

// //step 2  sum the arrays 

// let sum = numbers.reduce(function(acc, c){
//      return acc + c
// },0)

// console.log(sum);

// let average = sum / numbers.length
// console.log(average)