/*arrayMap() ->
- The map() method creates a new array by performing a function on each array element.
- The map() method does not execute the function for array elements without values.
- The map() method does not change the original array.
*/

// This example multiply each array value by 2

const numbers = [45,4,9,16,25];
const numbers1 = numbers.map(function (value,index,array) {
    return value * 2;
});

console.log(numbers1);                               //[ 90, 8, 18, 32, 50 ]

/*Note that the function takes 3 arguments ->
- The item value
- The item index
- The array iteself
*/

/*
- When a callback function uses only the value parameter,
- the index and array parameter can be omitted.
*/

const numbers2 = [45,4,9,16,25];
const numbers3 = numbers2.map(function(value){
    return value*2;
});
 
console.log(numbers3);                                  //[ 90, 8, 18, 32, 50 ]

