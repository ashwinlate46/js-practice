/*object() ->
In JS almost everything is an object.
- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects
- Objects do not have Index.
All JavaScript values, except primitives, are objects.
*/

/*JavaScript Primitives ->
- A primitive value is a value that has no properties or methods.
- 3.14 is a primitive value
- A primitive data type is data that has a primitive value.
- JavaScript defines 7 types of primitive data types:
string
number
boolean
null
undefined
symbol
bigint
*/

/*Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).
if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
*/

/*Objects are Variables ->
- JavaScript variables can contain single values:
- JavaScript variables can also contain many values.

- Example -> let person = "John Doe";

- Objects are variables too. But objects can contain many values.
- Object values are written as name : value pairs (name and value separated by a colon).

- Example -> let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
*/

// A JavaScript object is a collection of named values
// It is a common practice to declare objects with the const keyword.

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

/*Object Properties
The named values, in JavaScript objects, are called properties.*/

/*Object Methods
- Methods are actions that can be performed on objects.
- Object properties can be both primitive values, other objects, and functions.
- An object method is an object property containing a function definition.
*/

/*Creating a JavaScript Object ->
 There are different ways to create new objects:

- Create a single object, using an object literal.
- Create a single object, with the keyword new.
- Define an object constructor, and then create objects of the constructed type.
- Create an object using Object.create().
*/

/*Using an Object Literal
- This is the easiest way to create a JavaScript Object.
- Using an object literal, you both define and create an object in one statement.
- An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
*/

const person1 = {firstName:"Ashwin", lastName:"Late",age:23, eyeColor:"blue"};

const user = {
    name: "Ashwin",
    age:23,
    location:"Hyderabad",
    email:"ashwin@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

//create a empty JavaScript object, and then add 4 properties

const user2 = {};

user2.name = "Sam";
user2.age = 38;
user2.location = "Delhi";
user2.email = "sam@gmail.com";
user.isLoggedIn = true;
user2.lastLoginDays = ["Thursday","Friday"]

console.log(user2);

/*Using the JavaScript Keyword new ->
- create a new JavaScript object using new Object(), and then adds 4 properties:
*/

const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

/*
- The examples above do exactly the same.
- But there is no need to use new Object().
- For readability, simplicity and execution speed, use the object literal method.
*/

/*JavaScript Objects are Mutable
- If person is an object, the following statement will not create a copy of person:
*/

const x = person2;  // Will not create a copy of person.

/*The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.*/

const person3 = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
  }
  
  const y = person3;
  console.log(y.age);         //50

  y.age = 10;      // Will change both y.age and person.age
  console.log(y.age);         //10