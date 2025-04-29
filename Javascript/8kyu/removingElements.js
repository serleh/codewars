//PREP
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Parameter - > array of elements
// Return --> array with second elements removed
// EXAMPLE

function removeEveryOther(arr) {
  //loop through the elements  in the array
  // identify the elements that has an even index
  return arr.filter((element, i) => {
    if (i % 2 == 0) {
      return element;
    }
  });
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); // -> ["Keep", "Keep", "Keep", ...]
