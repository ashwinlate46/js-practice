/*IndexOf() -> 
- The Index of method returns the index(position) of the first occurance of a string in a string.
*/ 

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let index1 = text.indexOf("locates")
console.log(index);         // 7
console.log(index1);        // -1
/*Note :- Js counts position from zero.
0 is the first position in a string, 1 is the second position in a string, 2 is the third position in a string
*/

