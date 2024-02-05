/* Popping and Pushing in Array ->
- When you work with arrays, it is easy to remove element and add new elements.
- This is what popping and push is -> 
- Popping items out of an Array or pushing items into an Array.
*/

/*pop() ->
- The pop() method removes the last element from an Array.
*/

const fruits = ["Mango", "Guava", "Apple", "Orange", "Pineapple"]; 
console.log(fruits.pop());               //Pineapple
console.log(fruits);                     //[ 'Mango', 'Guava', 'Apple', 'Orange' ]

// The pop() method returns the value that was "popped out"
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

let fruit = fruits1.pop();

console.log(fruit);                      //Mango
console.log(fruits1);                    //[ 'Banana', 'Orange', 'Apple' ]