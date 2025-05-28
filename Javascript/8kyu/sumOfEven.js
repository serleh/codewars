// PREP
// A function that returns a sequence(indexstarts at 1) of all the even characters of a string
// if String is smaller than two characters or longer than 100 characters, it should return 'invalid string'

// P -> String
// R -> Array of even numbers
// E

function evenChars(string) {
  // if (typeof string !== "string" || string.length < 2 || string.length > 100) {
  //   return "invalid string";
  // }
  // let result = "";
  // for (let i = 1; i < string.length; i += 2) {
  //   result += string[i];
  // }
  // result = result.split("");
  // return result;
  return string.length < 2 || string.length > 100
    ? "invalid string"
    : [...string].filter((x, i) => i % 2);
}

// E
console.log(evenChars("abcdefghijklm")); // -> ["b", "d", "f", "h", "j", "l"]
console.log(evenChars("1234")); // -> "invalid string"
