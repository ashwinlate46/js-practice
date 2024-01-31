/* startsWith() -> 
- The startsWith() method returns true if a string begins with a specified value.
- Otherwise it returns false.
*/

//Return true
let text = "Hello World, Welcome to the javascript.";
console.log(text.startsWith("Hello"));             //true

//Return false
console.log(text.startsWith("hello"));             //false

//A start position for the search can be specified. 

//Return false
let text1 = "Hello World, Welcome to the universe.";
console.log(text1.startsWith("World",5));          //false

//Return true
console.log(text1.startsWith("World",6));          //true

//Return false
console.log(text1.startsWith("World",7))           //false