// PREP
// A function that removes duplicate from an array of non negative numbers

// P------> An array of pos numbers
//R ------> An array with negative numbers removed
//E

function removeDuplicate(n) {
  //   return [...new Set(n)];
  return n.filter((e, i) => n.indexOf(e) === i);
}

console.log(removeDuplicate([1, 1, 2])); // [1, 1, 2] -> [1, 2]
console.log(removeDuplicate([1, 2, 1, 1, 3, 2])); // [1, 2, 1, 1, 3, 2] -> [1,2,3]
