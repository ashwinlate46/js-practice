/*lastIndex() ->
- The lastIndexof() method returns the last index(position) of specified value.
- The lastIndexof() method return -1 if the value is not found.
- The lastIndexof() starts at a specified index from right to left.
- Syntax ->
                       0        1       2       3
           var a = ["Sanjay","Aman","Rehman","Akash"];
           indexof("searchitem",start)
*/

const fruits = ["Mango", "Orange","Guava","Apple","Orange","Pineapple"];
console.log(fruits.lastIndexOf("Orange"));                                 // 4
console.log(fruits.lastIndexOf("Orange",2));                               // 1
console.log(fruits.lastIndexOf("Oranges"));                                // -1


