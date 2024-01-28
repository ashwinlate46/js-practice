/*var:
- It is used to define a function scope variable.
- A function scope variable is accessible from any location inside function.
- You can declare in block and access from any another block inside function.
- It supports declaring, assigning and initialization.
- It supports Shadowing and Hoisting.*/

var x = 20;  //Initializtion
function f1(){
    var y;    //declaring
    var y = 10; //assigning
    console.log(x);
    console.log(y);
}
f1();

/*Shadowing:
- It supports shadowing.
- Shadowing is the process of configuring same name identifier again within the given scope.
    {
          var x = 10;
          var x = 20;        // shadowing
        }
*/
 function f2(){
    var a;    //declaration
    a = 30;   //assigning

    console.log(a);   //20

    var a = 40 //Shadowing

    console.log(a);    //40
 }
f2();

/* Hoisting ->
- It supports hoisting.
- Hoisting is the process of configuring the variable after using.
- There is no order dependency for variable declaration and assignment.
*/

function f3(){
    x1 = 90;   //assigning value
    console.log(x1);
    var x1;    //Hoisting
}
f3()

/*
- Prefer not use var 
- bacause of issue in block scope and functional scope.
*/

/*let ->
- It is used to configure a block scope variable.
- A block scope variable is accessible with in the given block and its inner blocks.
- It supports declaring, assigning and initialization.
- It will not support shadowing and hoisting.
*/

function f4(){
    let firstName;  //Declaring

    firstName = "Ashwin"  //Assigning

    console.log(firstName);

    let lastName = "Late";  //Initialization

    console.log(lastName);

}
f4();
// console.log(lastName) //Error - lastName is not defined

/*
FAQ: What is a closure?
Ans : A closure is the scope defined for outer block that allows its members accessbile
         to inner blocks. Every function by default have a closure.
*/

/*
const:
- It is a block scope configuration for variable.
- It allows only initialization.
- It will not allow declaring and assigning.

        const  x;       // invalid
        x = 10;        // invalid

        const x = 10;   // valid
        x = 20;        // invalid
- It will not allow shadowing and hoisting.
*/

function f5(){
    const id = "ashwin90";
    console.log(id);
}
f5()

//Example for let, const, var

const accountId = 144553;
let accountEmail = "ashwin89@gmail.com";
var accountPassword = "12345";
accountCity = "Hyderabad";
let accountState;
// accountId = 3453    //not allowed

accountEmail = "ash49@gmail.com";
accountPassword = "34539";
accountCity = "Mumbai";

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);