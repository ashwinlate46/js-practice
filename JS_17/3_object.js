/*Object Type ->
- It is an entity used to keep all related data and logic together.
- Entity refers to business logic and data.
- "Alan Kay" introduced the concept of object into computer programming in early 1960's.
- Object encapsulates related data and logic using a block "{   }".
- It is a key and value collection.
- Key is string type and value can be any type.

Syntax:
        var  obj = { "Key" : value, "Key": value }

- If object is defined with data only, then it is reffered as "JSON".
  [JavaScript Object Notation]

        var obj = { "Key" : function() { } }        => not JSON
        var obj = { "Key" : value }            => JSON


- The values are accessed with reference of object and key name.

        obj.Key                => It returns the value stored in specified key
        obj.Key = newValue    => It assigns a new value into the reference.

- JavaScript ES5+ versions support destructure technique

        obj[Key]                => It returns the value

   It is allowed only using iterations.

*/

var tv = {
    "Name": "Samsung TV",
    "Price": 0.00,
    "Stock": true,
    "ShippedTo": ["Delhi", "Hyd"],
    "Rating": {"Rate":4.3, "Count": 5000}
}
console.log(tv.Price);                            // 0
console.log("Name = ",tv["Name"]);
console.log("Price = ",tv.Price);
console.log("Stock = ",tv["Stock"]);
console.log("ShippedTo = ",tv.ShippedTo.join("/"));
console.log("Rating = ",tv.Rating);
console.log("RatingCount = ",tv.Rating.Count);

//Create a javascript object using a new keyword

const tinderUser = new Object()              //Singleton Object

const tinderUser2 = {}                      //Non-Singleton Object

tinderUser2.id = "123abc";
tinderUser2.name = "Sammy";
tinderUser2.isLoggedIn = false;

console.log(tinderUser2);                 //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//Nesetd Object ->

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashwin",
            lastname: "Late"
        }
    }
}

console.log(regularUser.email);                             //some@gmail.com
console.log(regularUser.fullname.userfullname.firstname);   //Ashwin
console.log(regularUser.fullname.userfullname.lastname);    //Late
console.log(regularUser.fullname.userfullname);             //{ firstname: 'Ashwin', lastname: 'Late' }

/*Object Assign ->
- The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. 
*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);                            //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Spread Opreator
//Mostly Used
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);                            //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//Array of Objects

const users = [
    {id:1, email:"ashwin1@gmail.com"},
    {id:2, email:"ashwin2@gmail.com"},
    {id:3, email:"ashwin3@gmail.com"},
]

console.log(users[1].email);              //ashwin2@gmail.com
console.log(users[1].id);                 //2

console.log(users[0].email);              //ashwin1@gmail.com
console.log(users[0].id);                 //1


console.log(Object.keys(tinderUser2));            //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser2));          //[ '123abc', 'Sammy', false ]


/*hasownproperty ->
- It returns a Boolean value (true or false) indicating whether the object has the given property as its own property.
*/

console.log(tinderUser2.hasOwnProperty('isLoggedIn'));        //true
console.log(tinderUser2.hasOwnProperty('isLogged'));          //false