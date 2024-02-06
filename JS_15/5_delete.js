/*delete() ->
- The delete operator in JavaScript can be used to remove an element from an array. 
- However, it is not recommended to use the delete operator to remove elements from an array, as it can leave undefined holes in the array. 
- Instead, it is recommended to use the pop(), shift(), or splice() methods to remove elements from an array.
*/

const array = [1, 2, 3, 4, 5];

console.log(array);                //[ 1, 2, 3, 4, 5 ]
// Delete the element at index 2
delete array[2];

console.log(array);                //[ 1, 2, <1 empty item>, 4, 5 ]
// The array now contains [1, 2, undefined, 4, 5]