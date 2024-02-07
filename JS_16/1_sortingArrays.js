/*sortingArrays() ->
- The sort() method sorts an array alphabetically.
*/

const fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.sort());                                                         //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

/*Reversing an Array ->
- The reverse() method reverse the elements in an array.
- You can use it to sort an array in descending order.
*/
const fruits1 = ["Banana","Orange","Apple","Mango"];
console.log(fruits1);                                                               //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

//first sorts the array alphabetically
console.log("First sort the array alphabetically\n ",fruits1.sort());               //[ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log("By combining sort and reverse\n ",fruits1.reverse());                  // [ 'Orange', 'Mango', 'Banana', 'Apple' ]


