// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// SOLUTION

// CHECK IF THE STRING ENDS WITH !, AND REMOVE

function remove(string) {
  while (string.endsWith("!")) {
    string = string.slice(0, -1);
  }
  return string;
}

console.log(remove("HI!"));
