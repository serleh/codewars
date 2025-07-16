// Fruit Guy has a bag of fruits where some fruits are rotten.
// He want to replace all the rotten pieces with fresh ones
// implement a method that accepts an array of strings containing fruits should returns
//  an array of strings where all the rotten fruits are replaced by good ones.

// P ===> Array of string
// R ===> Array of string

function removeRotten(bagOfFruits) {
  //Loop through the array
  // If it contains rotten, remove rotten and lowercase the rest

  if (!bagOfFruits) return [];
  return bagOfFruits.map((fruit) => {
    if (fruit.startsWith("rotten")) {
      const fresh = fruit.slice(6);
      return fresh[0].toLowerCase() + fresh.slice(1);
    }
    return fruit;
  });
}

console.log(removeRotten(["apple", "rottenBanana", "apple"])); // ===> ["apple","banana","apple"]
