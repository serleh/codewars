//PREP
// A method that will search an array of strings that contains another string, ignoring capitalization.
// Then return an array of the found string

// P --> query string, and array to search
//R -->  array
// E

function wordSearch(query, seq) {
  // Filter the words that contains the queryString
  // Store them in a variable
  // Check if they are empty then return ['Empty']
  const result = seq.filter((word) =>
    word.toLowerCase().includes(query.toLowerCase())
  );

  return result.length > 0 ? result : ["Empty"];
}

console.log(wordSearch("me", ["home", "milk", "Mercury", "fish"])); // ->['home''Mercury]
console.log(wordSearch("him", ["home", "milk", "Mercury", "fish"])); // ->['Empty']
