/*isArray() -> 
- The is Array() method returns true if an object is an array otherwise false.
*/

var a = ["Sanjay","Aman","Rahul"];    //Array
var b = 20;                           //number
var c = "Rahul"                       //string

console.log(Array.isArray(a));        //true
console.log(Array.isArray(b));        //false

const fruits = ["Mango","Orange","Pineapple","Guava","Apple"];
console.log(Array.isArray(fruits));    //true


const boy = ["AK","BK","CK","DK"]
let results = Array.isArray(boy);
console.log(results);                 //true

const names1 = "Rahul";
const names2 =  ["Ashwin","Alok"];

console.log(Array.isArray(names1));   //false

if(Array.isArray(names1)){
    console.log("This is an Array");
}
else{
    console.log("This is not an Array");
}

// op -> This is not an Array

if(Array.isArray(names2)){
    console.log("This is an Array");
}
else{
    console.log("This is not an Array");
}

// op -> This is an Array

