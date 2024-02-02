/*Conditional (Ternary) Operator ->
The conditional (ternary) operator is the only JavaScript operator 
that takes three operands
variablename =(condition) ? value1:value2
*/

/* Example -
var age = 18;

if(age>=18){
    console.log("You are eligible to Vote");
}
else{
    console.log("You are not eligible to Vote");
}
*/

var age = 18;

console.log( (age >= 18) ? "You are eligible to Vote" : "You are not eligible to Vote");
