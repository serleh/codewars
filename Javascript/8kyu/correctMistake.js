//PREP
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

// P ---> String
// R---> String

function correct(string) {
  const charsToReplace = {
    5: "S",
    0: "O",
    1: "I",
  };
  string = string
    .split("")
    .map((char) => charsToReplace[char] || char)
    .join("");
  return string;
}

//E
console.log(correct("L0ND0N")); // ---> LONDON
console.log(correct("DUBL1N")); // ---> DUBLIN
console.log(correct("PAR15")); //---> PARIS
