// PREP
// A function that accepts names and return first character capitalized and the rest lower

// Parameter -> An array of strings
// Return -> An array of string with fist character capital and rest lowercase
// Example

function capMe(names) {
  // loop through names
  // captilize first character
  //  lower all names except first character

  return names.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
}

console.log(capMe(["jo", "nelson", "jurie"])); //  -->  ['Jo', 'Nelson', 'Jurie']
console.log(capMe(["KARLY", "DANIEL", "KELSEY"])); //  --> ['Karly', 'Daniel', 'Kelsey']
