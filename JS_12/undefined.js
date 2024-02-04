/*Undefined Type ->
- It is the type defined for variable when value is not assigned or initialized.
- Javascript compiler uses "undefined" as keyword to set for a variable if value not found at compile time.

                var price;
                document.write("Price=" + Price);        Price=undefined

- You can use "undefined" keyword the verify value defined or not.
- However the good code approach to verify defined value is given below.
       
                if(variableName)    => returns true if variable is defined with value
                {
                }

                if(variable===undefined)    => not good but ok
                if(variable!==undefined)        => not good but ok
                if(variable)                => Good
*/

//It returns true because variable value is defined
var Name  = "Samsung TV";
var Price;
Price = 45000;
if(Price){
    console.log(`Name = ${Name} and Price = ${Price}`);
}
else{
    console.log(`Name = ${Name}`);
}

//It returns false because varibale value is not defined

var productName = "HP";
var productPrice;       // product price is not assigned or initialized so it return false

if(productPrice){
    console.log(`Product_Name = ${productName} and Product_Price = ${productPrice}`);
}
else{
    console.log(`Product_Name = ${productName}`);
}

/*What is difference between undefined and not-defined ?
Ans:  undefined specifies that value is not defined.
      not-defined specifies that reference not found.
*/

/*Not-defined -> if variable is not declared, assign, initialize, after this you print this varibale it gives error like ReferenceError: y is not defined, it is a not defined type.
*/
var x;
console.log(`X = ${x} and Y = ${y}`);     //ReferenceError: y is not defined
