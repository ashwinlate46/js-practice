/*lastIndexOf() ->
- The lastIndexOf() method returns the index of the last occurance of a specified string.
*/

let text = "please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index);        // 21

// Both indexOf() and lastIndexOf() method return -1 if the text is not found.
let index1 = text.lastIndexOf("locates");
console.log(index1);       // -1

// Both method accept a second parameter as the starting position for the search.
let index2 = text.indexOf("locate",6);         //7
console.log(index2);

/*
- The lastIndexOf() method searches backwards (from the end to the beginning).
- If the second parameter is 15, the search starts at positon 15 and searches to the beginning of the string.
*/
let index3 = text.lastIndexOf("locate",15);    //7
console.log(index3);
