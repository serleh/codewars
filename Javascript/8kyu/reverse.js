//PREP

// A function that accept a string and reverses it
// P--> string
// R --> string
//E

function reverse(str) {
  // turn the string to array
  // reverse the array
  // return it back to string

  //   return str.split("").reverse().join("");
  return [...str].reverse().join("");
}

console.log(reverse("world")); // 'world'  =>  'dlrow'
console.log(reverse("word")); // 'word' => 'drow
