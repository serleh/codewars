// PREP
// You will be given an array (a) and a value(x). Check if the array contains the value and return 'true' or 'false'
// P --- > array(a)
//R ----> Boolean value

//E

function contains(a, x) {
  return a.includes(x);
}

console.log(contains(["Mango", "Apple", "Orange"], "Apple")); // ->true
console.log(contains([1, 2, 3, 4, 5, 6, 7], 0)); // -> false
