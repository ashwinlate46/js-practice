/*findIndex ->
- The findIndex() method executes a function for each array element.
- The findIndex() method returns the index (position) of the first element that passes a test.
- Syntax ->
           array.findIndex(function(currentValue,index,arr),thisValue) 
*/

const ages = [10,23,19,20];
console.log(ages);

function checkAdult(age){
    return age >= 18;
}

console.log(ages.findIndex(checkAdult));     //1

function checkAdult(age){
    return age >= 25;
}

console.log(ages.findIndex(checkAdult));     //-1