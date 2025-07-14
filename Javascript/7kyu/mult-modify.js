//PREP
// A functon that takes 3 parameters,string as it's first parameter
// Use the second parameter, which is an int to find the corresponding word in the given string
// multiply the located string by the third parameter(int) add hyphen btw each word

// P ---> String and int
// R --> String

function modifyMultiply(str, loc, num) {
  // Split the string into array
  // Create an array with num element
  //  fill it with the str[loc]
  // join them
  str = str.split(" ");

  return Array(num).fill(str[loc]).join("-");
}

console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"
console.log(modifyMultiply("Hello world from OpenAI", 1, 3)); // "world-world-world"
console.log(modifyMultiply("Python is fun to learn", 2, 4)); // "fun-fun-fun-fun"
console.log(modifyMultiply("OneWordOnly", 0, 1)); // "OneWordOnly"
console.log(modifyMultiply("Repeat me again and again", 4, 2)); // "again-again"
console.log(modifyMultiply("Multiple    spaces    here", 2, 3)); // "here-here-here"
console.log(modifyMultiply("Edge case with index 0", 0, 2)); // "Edge-Edge"
