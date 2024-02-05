/*unshift() ->
- The unshift() method adds a new element to an array (at the beginning) and "unshifts" older elements.
*/

const fruits = ["Mango", "Guava", "Apple", "Orange", "Pineapple"];
console.log(fruits.unshift("Litchi"));                 // 6
console.log(fruits)                                   //[ 'Litchi', 'Mango', 'Guava', 'Apple', 'Orange', 'Pineapple' ]

//The unshift() method returns the new Array length.