/*reverse() ->
- The reverse() method reverse the element in an array.
- You can use it to sort an Array in descending order.
*/

const fruits = ["Mango", "Guava", "Apple", "Orange", "Pineapple"];    
console.log("Before Sort and Reverse -> ",fruits);                 //Before Sort and Reverse ->  [ 'Mango', 'Guava', 'Apple', 'Orange', 'Pineapple' ]
console.log("After Sort -> ",fruits.sort());                       //After Sort ->  [ 'Apple', 'Guava', 'Mango', 'Orange', 'Pineapple' ]
console.log("After Reverse ->", fruits.reverse());                 //After Reverse -> [ 'Pineapple', 'Orange', 'Mango', 'Guava', 'Apple' ]

