/*
- The array in JS is used to hold multiple elements in a single variable.
- The string is used to hold the characters.
- Many times we come across a situation where we need to convert an array to a string in Javascript.
- There is a method in Javascript known as toString(), which is used for this purpose.
*/

//Converting an Array to string in Javascript using tostring() method.

//1 -> Converting an Array of strings into strings in javascript

const stringArray = ["Ashwin","Tejas","Akash","Mohit"];
console.log(stringArray.toString());              //Ashwin,Tejas,Akash,Mohit
console.log(stringArray);                         //[ 'Ashwin', 'Tejas', 'Akash', 'Mohit' ]

//2 -> Converting an Array of Numbers into a string in Javascript

const numArray = [1,2,3,4,5];
console.log(numArray.toString());                 //1,2,3,4,5
console.log(numArray);                            //[ 1, 2, 3, 4, 5 ]

//3 -> Converting an mix Arrays (both number and string) into string in Javascript

const mixArray = ["Apple","Banana",1,2,3];
console.log(mixArray.toString());                //Apple,Banana,1,2,3
console.log(mixArray);                           //[ 'Apple', 'Banana', 1, 2, 3 ]

/*4 -> Converting string back to the Array in Javascript.
- This is a method in Javascript known as split(), which splits a string into an Array of substrings.
- The parameter that we pass in the split function is used to split the strings.
- Thus if we pass ',' as a parameter to our split method, then we will get our reversed Array.
*/

const mixedArray = ["Amit","Nakul",true,0,1,2];
const string = mixedArray.toString();
const ans_array = string.split(',');
console.log(mixedArray);                        //[ 'Amit', 'Nakul', true, 0, 1, 2 ]
console.log(ans_array);                         //[ 'Amit', 'Nakul', 'true', '0', '1', '2' ]
console.log(string);                            //Amit,Nakul,true,0,1,2
 
//Working with nested Array ->

const nestedArr = [1,"Abhishek",["Tejas",2]];
console.log(nestedArr.toString());              //1,Abhishek,Tejas,2
console.log(nestedArr);                         //[ 1, 'Abhishek', [ 'Tejas', 2 ] ]