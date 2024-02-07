/*filter() ->
- The filter() method creates a new array with array elements that pass a test.
- The filter() method creates a new array filled with elements that pass a test provided by a function.
- The filter() method does not execute the function for empty elements.
- The filter() method does not change the original array.
*/

const ages = [32, 33, 16, 40];
const result = ages.filter(function(value,index,array){
    return value >18;
});

console.log(result);                                    //[ 32, 33, 40 ]

/*Note that the function takes 3 arguments ->
- The item value
- The item index
- The array iteself
*/

const numbers = [45,4,9,16,25];
const numbersGreaterThan18 = numbers.filter(function (value) {
    return value > 18;
});

console.log(numbersGreaterThan18);                       //[ 45, 25 ]