//String
console.log("String");

/*String is Primitive Datatype in Javascript.
A string is textual content.
It must be enclosed in single quote '' and double quote "" */

// "Hello World"

// String value can be assigned to a variable using equal to operator.

var str1 = "Hello World";   //Double quote
var str2 = 'Hello World';   //Single quote
console.log(str1);        //Hello World
console.log(str2);        //Hello World

/*A string can also be treated like zero index based character array.
String as Array*/

var str = "Hello World";

console.log(str[0]);     //H
console.log(str[1]);     //e
console.log(str[2]);     //l
console.log(str[3]);     //l
console.log(str[4]);     //o
console.log(str[5]);     //Space
console.log(str[6]);     //W
console.log(str[7]);     //o
console.log(str[8]);     //r
console.log(str[9]);     //l
console.log(str[10]);    //d

console.log( "Length of String is: ",str.length)   //11

//String is character index, it can be accessed using for loop and for of loop

console.log("Iterate String");

var str3 = "Hello World";

console.log("For loop");
for(var i=0; i<str3.length; i++){
    console.log(str3[i]);
}

console.log("For of loop");
for(var ch of str3){
    console.log(ch);
}

console.log("Concatenation");

//A string is immutable in Javascript, it can be concatenated using (+) operator in JS.

var str4 = "Hello" + " World" + " From" + " India";
console.log(str4);

console.log("Include Quotation marks inside string");
//Include Quotation marks inside string
/*
Using single quotation marks if the whole string is enclosed with quotation marks vice versa
*/

var str5 = "This is 'Simple' String";
var str6 = 'This is "Simple" String';

console.log(str5);     //This is 'Simple' String
console.log(str6);     //This is "Simple" String

/*If you want to include some quotes in a string value as surrounding quotes then use backward slash(\) 
before quotation marks inside string value.
*/

var str7 = "This is \"Simple\" String";
var str8 = "This is \'Simple\' String";

console.log(str7);
console.log(str8);

//String Object
console.log("String Object");

const str9 = new String("Hello World!");
console.log(str9);
console.log(typeof(str9));

console.log("String Object Comparison");

var str10 = new String('Hello World');
var str11 = new String("Hello World");
var str12 = 'Hello World';

var str13 = str10;

console.log(str10==str11);    //false
console.log(str10==str12);    //true
console.log(str10==str13);    //true

console.log(typeof(str10));   //object
console.log(typeof(str12));   //string

//Template Literal
console.log("Template Literal");

let str14 = "Ashwin Late";
let greet = `Hi ${str14}`;    //Template string

console.log(greet);         //Hi Ashwin Late