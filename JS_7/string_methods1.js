/*trim() -> The trim() method removes whitespace from both sides of a string.
- The trim() method does not change the original string.
- Syntax -> string.trim()
*/

let str = "       This is a Javascript tutorial.It is a good tutorial.     ";
let trimedstr = str.trim();
console.log(str);
console.log(trimedstr);

/*charAt() -> The charAt() method returns the character at a specified index (position) in a string.
- The index of the string in first character is 0 and the second is 1;
- Syntax -> string.charAt(index).
*/

var str1 = "Apple is Sweet Fruit.";
var a = str1.charAt(0);      //A
var a = str1.charAt(8);      //Space
var a = str1.charAt(15);     //F
var a = str1.charAt(25);     //Space
console.log(a);

/*charCodeAt()-> The charCodeAt() method return the unicode of the character at a specified index (position) in a string.
- The index of the first character is 0 and the second is 1. */

var str2 = "Apple is Sweet Fruit";
var a = str2.charCodeAt(0);     //65
var a = str2.charCodeAt(8);     //32
var a = str2.charCodeAt(15);    //70
console.log(a);

/*fromCharCode() -> The string from char code() method converts unicode values to character.
- The string from char code() is a static method of the string object.
- Syntax -> string.from char code();
*/

let char = String.fromCharCode(69);  
var a = String.fromCharCode(99);     
console.log(char);
console.log(a);

/*concat() -> The concat() method joins two or more strings. 
- The concat() method does not change the existing string.
- The concat() method returns a new string.
- syntax -> string.concat(str1,str2....str());
*/

var str1 = " is Sweet fruit";
var str2 = "Apple";

var a = str2.concat(str1);

console.log(a);     //Apple is Sweet fruit.

/*split() -> The split() method splits a string into an array of substring.
- The split() method returns the newArray.
- The split() method does not change the original string.
- If (" ") is used as separator, the string is split between words.
- Syntax - string.split(separator,limit).
*/

var str3 = "Apple is Sweet Fruit";
var b = str3.split(',');
console.log(b);             //[ 'Apple is Sweet Fruit' ]


/*repeat() -> The repeat() method returns a string with a number of copies of a string.
- The repeat() method returns a new string.
- The repeat() method does not change the original string.
- syntax -> string.repeat(count);
*/

var str4 = "Apple is sweet fruit\n";
var c = str4.repeat(4);
console.log(c);     //Apple is sweet fruit  - 4 times

/*slice() ->  It returns the characters between specified index.
- It requires a start and end index.
- The end index must be a value greater than start index.
- It is uni-directional in reading.

- Syntax:
    slice(startIndex, endIndex);        => read between given index
    slice(startIndex);                => from start upto end
    slice(0, 7);                    => 0 to 7
    slice(7,16);                    => 7 to 16 chars
    slice(7);                        => 7 to end
    slice(7,0);                    => invalid
    slice(7,3);                    => invalid
*/

var str5 = "How are you doing today?";
var d = str5.slice(0, 24);          //How are you doing today?
var d = str5.slice(0);              //How are you doing today?
var d = str5.slice(0, 8);            //How are 
var d = str5.slice(8);              //you doing today?
var d = str5.slice(8, 24)            //you doing today?
var d = str5.slice(24, 0)            //invalid
var d = str5.slice(24, 5)            //invalid
console.log(d);


/*substr(): It returns the specified number of character from given index.

Syntax:
    substr(startIndex, howManyCharsToRead);
    substr(7, 5);            => 5 chars from 7 index
    substr(7,0);            => zero
    substr(7);                => 7 to end
    substr(7, -4);            => invalid
*/

var str6 = "Hello planet earth, you are a great planet";
var e = str6.substr(0, 8);     //Hello pl
var e = str6.substr(6, 21);     //planet earth, you are
var e = str6.substr(6);        //planet earth, you are a great planet
var e = str6.substr(8, -5);     //invalid
console.log(e);

/*substring() : It returns the character between specified index.
                It is bi-directional in reading.

Syntax:
substring(startIndex, endIndex);    => end index can be towards start or end of string
substring(7)        => 7 to end
substring(7,15)    => 7 to 15
substring(7,0)        => 7 to start
substring(7,3)        => 7 to 3 index
*/

var str7 = "Hello planet earth, you are a great planet";
var f = str7.substring(9);         //net earth, you are a great planet
var f = str7.substring(10, 20);     //et earth, 
var f = str7.substring(14, 0);      //Hello planet e
var f = str7.substring(17, 3)       //lo planet eart
console.log(f);

/*toString() -> The toString() method returns a string as a string.
- The toString() method does not change the original string.
- The toString() method can be used to convert a string object into a string.
- Syntax -> string.toString().
*/

var str8 = "Apple is Sweet Fruit";
var str8 = 50;
var g = str8.toString();    //5020
console.log(g + 20);

/*valueOf() -> The valueOf() method returns the primitive value of a string.
-The valueOf() method does not change the original string.
-The valueOf() method can be used to convert a string object into a string.
*/

var str9 = "Apple is sweet fruit";
var h = str9.valueOf();
console.log(h); 