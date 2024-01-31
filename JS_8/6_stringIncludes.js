/* includes() ->
- The includes() method returns true if a string contains a specified value.
- Otherwise it returns false.
*/
let text = "Hello world, Welcome to the universe."
console.log(text.includes("world"));        //true


//Check if a string includes "World".start at position 12.

console.log(text.includes("World",12));     //false

/* Note ->
- includes is case sensitive.
*/