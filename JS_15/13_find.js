/*find() ->
- The find() method returns the value of the first element that passes a test.
- The find() method executes a function for each array element.
- The find() method returns undefined if no element are found.
- Syntax -> 
           array.find(function(currentValue,index,arr),thisValue)
*/

const ages = [11,23,19,20];
console.log(ages);                          //[ 10, 23, 19, 20 ]

function checkAdult(age){
    return age >=18;
}

console.log(ages.find(checkAdult));         //23
