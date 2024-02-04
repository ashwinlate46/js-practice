/*Null Type ->
- It is a type returned by Javascript when value is not provided at runtime of application.
- The keyword "null" is used to verify null type.
- In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
*/

var Name = "Samsung TV";
var Price = 75889;

if(Price===null){
    console.log(`Name = ${Name}`);
}
else{
    console.log(`Name = ${Name} and Price = ${Price}`)
}