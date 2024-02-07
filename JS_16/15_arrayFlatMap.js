/*flatMap() -> 
- ES 2019 added the array flatMap() method to javascript.
- The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
- The flatMap() method maps all array elements and creates a new flat array.
- flatMap() creates a new array from calling a function for every array element.
- flatMap() does not execute the function for empty elements.
- flatMap() does not change the original array.
*/

const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap((x) => x*2);
console.log(newArr);                                    //[ 2, 4, 6, 8, 10, 12 ]

