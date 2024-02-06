/* join() method -> 
- The join method also joins all array elements into a string.
- It behaves just like tostring(), but in addition you can specify the separator.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("*"));                         //Banana*Orange*Apple*Mango
console.log(fruits.join(">>"));                        //Banana>>Orange>>Apple>>Mango
