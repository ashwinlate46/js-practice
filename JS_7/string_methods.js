//Length -> The length property returns the length of a string.

var str = "Ashwin";
console.log(str.length);

//toUpperCase() -> Converting Lowercase to Uppercase

var str1 = "ashwin late";
console.log(str1.toUpperCase());  //ASHWIN LATE

//toLowerCase() -> Converting Uppercase to Lowercase

var str2 = "ASHWIN LATE";
var a = str2.toLowerCase();      //ashwin late
console.log(a);  

/*includes -> The includes() method return true if a string contains a specified string.
- The includes method() case sensitive
- Syntax -> string.includes(searchValue, start)
*/

var str3 = "Apple is Sweet Fruit";
var b = str3.includes("fruit");      //false
var c = str3.includes("Fruit");      //true
var d = str3.includes("iss");        //false
var e = str3.includes("eet");        //true
var f = str3.includes("eet", "App")  //true
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

/*startsWith() -> The startsWith() methods return true if a string starts with a specified string.
Otherwise return false.
- The startsWith() method is case sensitive.
- Syntax -> string.startsWith(searchValue,start)
*/

var str4 = "Apple is Sweet Fruit";
var a = str4.startsWith("Apple");     //true
var a = str4.startsWith("apple");     //false
var a = str4.startsWith("App");       //true
var a  = str4.startsWith("Fruit")     //false
console.log(a);

/*endsWith() -> The endsWith() methods return true if a string ends with a specified string.
Otherwise return false.
- The endsWith() method is case sensitive.
- Syntax -> string.endsWith(searchValue,length)
*/

var str5 = "Apple is Sweet Fruit"; 
var a = str5.endsWith("fruit");     //false
var a = str5.endsWith("Fruit");     //true
var a = str5.endsWith("Sweet");     //false
var a = str5.endsWith("it");        //true
console.log(a);

/*Search() -> The search() method matches a string against a regular expression.
- The search() method returns the index (position) of the first match.
- The search() method return -1 if no match is found.
- The search() method is case Sensitive.
- syntax -> string.search(searchValue);
*/

var str6 = "Apple is Sweet Fruit";
var a = str6.search("Sweet");        //9
var a = str6.search("Mango");        //-1
var a = str6.search("SwEEt");        //-1
console.log(a);

/*match() -> The match() method matches a string against regular expression.
- The match() method returns an array with the matches.
- The match() method returns null if no match is found.
- syntax -> string.match(match);
*/ 

var str7 = "Apple is Sweet Fruit";
var a = str7.match("is");       //[ 'is', index: 6, input: 'Apple is Sweet Fruit', groups: undefined ]
var a = str7.match(/is/g);      //[ 'is' ]
var a = str7.match(/Sweet/g)    //[ 'Sweet' ]
var a = str7.match(/sweet/g)    //null
console.log(a);

/*indexOf() -> The indexOf() method returns the position of the first occurance of a value in a string.
- The indexOf() method returns -1 if the value is not found.
- The indexOf() method is case sensitive.
- Syntax -> string.indexOf(searchValue, start).
*/

var str8 = "The rain in SPAIN stays mainly in the plain";
var a = str8.indexOf("stays");         //18
var a = str8.indexOf("in");            //6
var a = str8.indexOf("rains")          //-1
console.log(a);

/*lastIndexOf() -> The lastIndexOf() method returns the index (position) of the last occurance of a specified value in a string.
- The lastIndexOf() method searches the string from the end to the beginnig.
- The lastIndexOf() method return the index from the beginning(position).
- The lastIndexOf() method returns -1 if the value is not found
- syntax -> string.lastIndexOf(searchValue, start);
*/

var str9 = "The rain in SPAIN stays mainly in the plain";
var a = str9.lastIndexOf("in");        //41
var a = str9.lastIndexOf("rain")       //4
var a = str9.lastIndexOf("rains")      //-1
console.log(a);

/*replace() -> The replace() method searches a string for a value or a regular expression.
- The replace() method returns a new string with the value() replaced.
- The replace() method does not change the original string.
- Syntax -> string.replace(searchValue, newValue)
*/

var str10 = "Apple is Sweet Fruit"
var a = str10.replace("Sweet", "Good");
var a = str10.replace("Apple", "Mango");
console.log(a);