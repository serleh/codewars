//PREP
// A function that returns "Hello,Name!" to a given name, or says Hello,World! if name is not given
//  Assume the name as a string and it checks for user typos to return a name with capital letter first

// P ---> String
// R ---> String

function hello(name) {
  // if there is name return "Hello, Name!"
  // else "Hello World"

  if (!name) {
    return `Hello, World!`;
  } else {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${name}!`;
  }
}

// E
console.log(hello("john")); // ---> "Hello, John!"
console.log(hello("aliCE")); // ---> Hello, Alice!
console.log(hello("")); // --->  "Hello, World!
