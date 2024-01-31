/* endsWith() -> 
- The endsWith() method returns true if a ends with a specified value.
- Otherwise it returns false.
*/

//Checks if a string ends with "Doe".

let text = "John Doe";
console.log(text.endsWith("Doe"));                  //true

//Checks if the first character of a string ends with "World".

let text1 = "Hello World, Welcome to the Universe."
console.log(text1.endsWith("World", 11));           //true

let text2 = "Hello World, Welcome to the Universe."
console.log(text2.endsWith("World",10));            //false


//endsWith() is a case sensitive.