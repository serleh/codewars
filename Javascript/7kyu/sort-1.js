//PREP
// A function that returns the elements of an array sorted in lexicographical order
//P --> array of elements
//R --> array of sorted elements

function sortme(names) {
  return names.sort();
}

//E

console.log(sortme(["banana", "apple", "car"])); // ["banana", "apple", "car"] -> ["apple", "banana", "car"]
console.log(sortme(["ant", "ball", "cat"])); // ["ant", "ball", "cat"] -> ["ant", "ball", "cat"]
