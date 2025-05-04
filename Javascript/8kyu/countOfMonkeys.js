// PREP
// You take ur son to the forest to see monkeys, There are certain numbers(n) but he is bad at maths
// you have to start counting with him from one to that number

// P -> number (n)
// R -> array of (n)
// E

function monkeyCount(n) {
  // create a num var
  // loop through the array and push the result
  // return num

  let countArr = [];
  for (let i = 1; i <= n; i++) {
    countArr.push(i);
  }
  return countArr;
}

console.log(monkeyCount(10)); // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(1)); // 1 --> [1]
