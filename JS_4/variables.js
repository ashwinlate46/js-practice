/*Variable Naming:
- A variable name must start with alphabet.
- You can use "_" to start variable name, but not recommended.
- Don't use any special chars.
- Variable name can't be a keyword.
- Variable name can be max 255 chars long.
- Variable must speak what it is.
- Always use camel case for naming variables.
*/

var quantity = 2;
var price = 354693;
var studentName ="Ashwin";

//Local Variable vs Global Variable

let car = "Audi";   //global variable

function add(){
    let result = 46;  //local variable
    console.log(car);
    console.log(result);
}
add();
// console.log(result);   //Error because we can not define local variable outside the function.
console.log(car);         //Audi

function sub(){
    let results = "Pass";
    console.log(results);
}
sub();