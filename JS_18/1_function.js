/*Functions in JavaScript

- Functions are used to refactor the code.
- Refactor is the process of extracting a set of lines into a function, which encapsulates and configures as "function".
- Refactoring allows easy
    a) Reusability
    b) Maintainability
    c) Testability
    etc..
*/

/*Configuring a Function:
-------------------------------

- Function can be configured in 2 ways
    a) Function Expression
    b) Function Declaration

Syntax: Expression

    let  Print = function() {

    }

Syntax: Declaration

    function Print() {

    }

- A function expression allows to change the functionality according to state & situation.
- It uses a memory, where you can assign new functionality.
*/

function sayMyName(){
    console.log("Ashwin Late");
}

sayMyName            //Nothing print because its a refrence of function
sayMyName()          //Ashwin Late


function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

addTwoNumbers(3,"6");               //36
addTwoNumbers(3,"a");               //3a
addTwoNumbers(3,null);              //3
addTwoNumbers(3,6);                 //9

function addThreeNumbers(number1,number2,number3){
    let result = number1 + number2 + number3;
    return result;
}

let result = addThreeNumbers(4,7,8);
console.log("Result : ",result);                     //19

/*
- A parameter defined in function declaration is known as "Formal Parameter".
- A parameter defined while calling the function is known as "Actual Parameter"  // "Argument".
- Formal parameter name is just a memory reference name, where you can store any type of value.
        a) Primitive
        b) Non Primitive
        c) Function

Syntax:
    function Name(params) {
   
    }

    Name([ ])            => array
    Name({ })            => object
    Name(/ /)            => Regular Expression
    Name(false)        => boolean
    Name('Hello')        => string
    Name(0)            => number
    Name(function(){})    => function

- A function can have multiple parameters.
- Every parameter is a required parameter and have order dependency.
*/

function loginUserMessage(userName){
    return `${userName} just logged in.`
}

loginUserMessage("Ashwin")                               //Nothing Print
console.log(loginUserName("Ashwin"));                    //Ashwin just logged in.
console.log(loginUserName());                            //undefined just logged in.


function loginUserName(userName = "Sam"){
    if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in.`;
}

console.log(loginUserName());                   //Sam just logged in.
console.log(loginUserName("Ashwin Late"));      //Ashwin Late just logged in.
