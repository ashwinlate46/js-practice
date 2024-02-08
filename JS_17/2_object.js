//object literal
//accessing objects

const user = {
    name: "Ashwin",
    "fullName":"Ashwin Late",
    age:23,
    location:"Hyderabad",
    email:"ashwin@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(user.email);                 //ashwin@google.com
console.log(user["email"]);              //ashwin@google.com

console.log(user["fullName"]);           //Ashwin Late

/*Interview Question ->
- Use Symbol as a key in object
- first define the symbol.
- then use as a key in object
*/

const mySym = Symbol("key1")

const user2 = {
    name: "Ashwin",
    [mySym] : "myKey1",
    age:23,
    location:"Hyderabad",
    email:"ashwin@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(user2[mySym]);                  //myKey1

/* Object freeze() Method ->
- The Object.freeze() method is used to freeze an object. 
- Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.
*/

user2.email = "ashwin@chatgpt.com";
//Object.freeze(user2);
user2.email = "ashwin@gmail.com";
console.log(user2);

user2.greeting = function(){
    console.log("Hello JS User");
}

user2.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(user2.greeting());
console.log(user2.greetingTwo());

/*op->
Hello JS User
undefined
Hello JS User,Ashwin
undefined
*/

/*Undefined
- the reason we are getting "undefined" when we call "console.log(JSUser.greetings()) is 
- because the "JSUser.greeting " function does not have a "return" statement.
- when a funtion does not explicitly return a value ,it implicitly returns "undefined" in javascript.
*/