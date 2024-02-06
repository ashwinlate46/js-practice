/*some ->
- The javascript arr.some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.
- The some() method executes the callback function once for each array element.
- The some() method returns true (and stops) if the function returns true for one of the array elements.
- The some() method returns false if the function returns false for all the array elements.
- Syntax ->
            arr.some(function(value,index,arr),this)
*/

const ages  = [10,13,18,20];
console.log(ages);                                  //[ 10, 13, 18, 20 ]

function checkAdult(ages){
    return ages >=18;
}
console.log(ages.some(checkAdult));                 //true

function checkAdult(ages){
    return ages >=21;
}
console.log(ages.some(checkAdult));                //false