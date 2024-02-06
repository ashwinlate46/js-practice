/*length() ->
- The length property provides an easy way to append a new element to an array.
*/

const fruits = ["Mango","Guava","Apple","Orange","Pineapple"];
console.log(fruits.length);                                    // 5

fruits [fruits.length] = "kiwi";
console.log(fruits);                                          //[ 'Mango', 'Guava', 'Apple', 'Orange', 'Pineapple', 'kiwi' ]

console.log(fruits.length);                                   // 6