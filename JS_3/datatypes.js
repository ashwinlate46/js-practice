//JavaScript is implicitly typed.
// The data type of memory will be determined according to the value assigned.

let name = "Ashwin"       //String
let id = 35;              //Number
let isLoggedIn = true;    //Boolean 

console.log(name);
console.log(id);
console.log(isLoggedIn);

//typeof

console.log(typeof name);
console.log(typeof id);
console.log(typeof isLoggedIn);

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => unique

console.log(typeof null);        //object
console.log(typeof undefined);   //undefined
console.log(typeof Symbol);      //function

//Javascript has dynamic types
//This means that the same variable can be used to hold different datatypes
console.log("Javascript types are Dynamic");

let x1 ;   //declaration  and x1 is undefined
x1 = 74;   //assign  and now x1 is number;
x1 = "javascript";  //x1 is string

console.log(x1);

/*Javascript Numbers
All javascript numbers are stored as decimal numbers (floating point).
Numbers can be written with, or without decimals.*/

console.log("Javascript Numbers");

//with Decimals
let a1 = 46.93;

console.log(a1)     //46.93

//without Decimals
let b1 = 76;

console.log(b1);   //76

/*
- You can verify the input value and compare with number type by using "isNaN()".
-  "isNaN()" is a boolean method that returns true if given value is not a number.
*/

let num1 = "ashwin";

if(isNaN(num1)){
    console.log("It is not a number");
}
else{
    console.log("It is a number");
}

/* Javascript Strings
String is a series of characters like ("Ashwin").
String are written with single quotes and double quotes.
ES 5+ versions introduced backtick for string.
*/
console.log("Javascript Strings");

let firstName = "Ashwin";
let lastName = "Late";

console.log(firstName);   //Ashwin
console.log(lastName);    //Late

/* Exponential Notation:-
Extra large or extra small numbers can be written with scientific (exponential) notation. */

console.log("Exponential Notation");
let x2 = 123e5;
console.log(x2)    //12300000

let y2 = 123e-5;
console.log(y2);   //0.00123

/* JavaScript BigInt:-
All JavaScript numbers are stored in a a 64-bit floating-point format.
JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.*/

console.log("Javascript BigInt");
let x3 = BigInt("123456789012345678901234567890");
console.log(x3);                                   //123456789012345678901234567890n

/* JavaScript Booleans:-
Booleans can only have two values: true or false. */

let x4  = 55;
let x5 = 66;
let y3 = 55;

console.log(x4==y3);    //it returns true
console.log(x4==x5);    //it returns false


/* The typeof Operator:-
You can use the JavaScript typeof operator to find the type of a JavaScript variable.
The typeof operator returns the type of a variable or an expression. */

console.log("Javascript typeof operator");
console.log('The typeof Operator');
typeof ""; // Returns String
typeof "Ashwin"; // Returns String
typeof "Late"; // Returns String
console.log(typeof("Ashwin"));

console.log(typeof 0);      //returns number
console.log(typeof 314);    //returns number
console.log(typeof 3.14);   //returns number
console.log(typeof 3);      //returns number
console.log(typeof (3 + 4)); //returns number

/* Undefined:-
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.*/
console.log('Undefined');
let car; // value is undefined type is undefined.
console.log(car);     //undefined
console.log(typeof car);

/*Empty Values:-
An empty value has nothing to do with undefined.
An empty string has both a legal value and a type. */
console.log('Empty values');
let cars = ""; // The value is "", the typeof is "String".
console.log("The value is: " + cars);
console.log("The type is: " + typeof cars);

