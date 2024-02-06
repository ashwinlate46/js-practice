/*every ->
- The every() method executes a function for each array element.
- The every() method returns true if the function returns true for all elements.
- The every() method returns false if the function returns false for one elements.

- Syntax ->
         array.every(function(currentValue,index,arr),thisValue)
*/

const ages = ["10",19,25,20];
console.log(ages);

function checkAdult(ages){
    return ages >=18;
}
console.log(ages.every(checkAdult));     //false


const ages1 = ["18",19,25,20];
console.log(ages1);

function checkAdult(ages1){
    return ages1 >=18;
}
console.log(ages1.every(checkAdult));     //true