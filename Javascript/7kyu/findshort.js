//PREP
// Given a string of words, return the length of the shortest word

// P ---> String
// R -- Number

//E
// function findShort(s) {
//   // Turn the string into words
//   // count the length of each word
//   // return the length of the shortes
//   //let words = s.split(" ");
//   return Math.min(...s.split(" ").map((s) => s.length));
// }

const findShort = (s) => Math.min(...s.split(" ").map((word) => word.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
