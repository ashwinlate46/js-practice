/*push() -> 
- The push method adds a new element to an Array (at the end).
*/

const fruits = ["Mango", "Guava", "Apple", "Orange", "Pineapple"]; 
fruits.push("litchi");
console.log(fruits);                    //[ 'Mango', 'Guava', 'Apple', 'Orange', 'Pineapple', 'litchi' ]


//The push() method returns the new Array length

const fruits1 = ["Banana","Orange","Apple","Mango"];
let length = fruits1.push("kiwi");
console.log(fruits1);                           //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
console.log(length);                            // 5
