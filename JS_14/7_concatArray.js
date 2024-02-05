/*concat() ->
- The concat() methods creates a new array by merging(concatenating).
*/

const a1 = ["Abhishek","Aman", "Sumit"];
const b1 = a1.concat("vikas","nishant");
console.log(b1);                            //[ 'Abhishek', 'Aman', 'Sumit', 'vikas', 'nishant' ]

//Another method to concat

const x1 = [1,2,3,4,5];
const x2 = [6,7,8,9,10];

const c = x1.concat(x2);
console.log(c);                             //[1, 2, 3, 4,5,6, 7, 8, 9, 10]



//Merging three Array

const aa = [1,2,3,4,5];
const bb = [6,7,8,9,10];
const cc = [11,12,13,14,15];

const dd = aa.concat(bb,cc);

console.log(dd);                          //[1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13, 14, 15]
