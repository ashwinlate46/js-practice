//Length Property -> 

const fruits = ["Apple","Banana","Orange","Mango"];
let length = fruits.length;
console.log(fruits);              // [ 'Apple', 'Banana', 'Orange', 'Mango' ]
console.log(length);              // 4
console.log(fruits.length);       // 4

//Adding Array Elements

fruits.push("Lemon");
console.log(fruits);              //[ 'Apple', 'Banana', 'Orange', 'Mango', 'Lemon' ]

//New element can also be added to an array using the length property.

const a = [1,2,3,4,5];
a[a.length] = "10";
console.log(a);                  //[ 1, 2, 3, 4, 5, '10' ]

//Associatives Array

const person = [];
person[0] = "Ashwin";
person[1] = "Late";
person[2] = 23;

console.log(person.length);         //3
console.log(person[0]);             //Ashwin
console.log(person);                //[ 'Ashwin', 'Late', 23 ]

/*Javascript New Array() ->
- These two different statements both create new array 
*/

const points = new Array(10,20,30,40);
console.log(points);                   // [ 10, 20, 30, 40 ]

//How to recognize array

const boys = ["Abhishek","Aman","Alok","Sameer"];
console.log(typeof(boys));       //object

/*Traversal in Array ->
- Navigate through an Array
*/

var myFriends = ["Abhishek","Aman","Arjun","Vishal","Aakash"];
console.log(myFriends[0]);            // Abhishek
console.log(myFriends.length-1);      // 4

console.log(myFriends.length);        // 5

//We use for loop to navigate

for(var i=0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}

/*Op -> 
Abhishek
Aman
Arjun
Vishal
Aakash
*/