/*includes ->
- The includes() method returns true if an array contains a specified value.
- The includes() method returns false if the value is not found.
- The includes() method is Case Sensitive.
- Syntax ->
                       0        1       2       3
           var a = ["Sanjay","Aman","Rehman","Akash"];
           indexof("searchitem")
*/

const fruits = ["Mango", "Orange","Guava","Apple","Orange","Pineapple"];
console.log(fruits.includes("Mango"));                                    //true
console.log(fruits.includes("mango"));                                    //false
console.log(fruits.includes("Pomegranate"));                              //false

