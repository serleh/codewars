// An element in an array is dominant if it is greater than all elements to its right.
// You will be given an array and your task will be to return
// a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

let dominant = [1, 21, 4, 7, 5];

let result = dominant.filter((e, i) =>
  dominant.slice(i + 1).every((x) => x < e)
);
console.log(result);