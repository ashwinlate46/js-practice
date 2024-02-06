/*filter() ->
- The filter() method creates a new array filled with elements that pass a test provided by a function.
*/

const ages = [25,12,19,20];
console.log(ages);                            //[ 25, 12, 19, 20 ]

function checkAdult(age){
    return age>=18;
}
console.log(ages.filter(checkAdult));        //[ 25, 19, 20 ]


function checkAdult(age){
    return age>=26;
}
console.log(ages.filter(checkAdult));        //[]


