/*indexof() ->
- The indexof() method returns the first index(position) of a specified value.
- The indexof() method returns -1 if the value is not found.
- The indexof() method starts at a specified index and searches from left to right.
- Syntax ->
                       0        1       2       3
           var a = ["Sanjay","Aman","Rehman","Akash"];
           indexof("searchitem",start)
*/

const fruits = ["Mango","Guava","Apple","Orange","Pineapple"];
console.log(fruits.indexOf("Apple"));                           //2
console.log(fruits.indexOf("Pineapple"));                       //4
console.log(fruits.indexOf("Banana"));                          //-1

const sports = ["Cricket","Hockey","BasketBall","Tennis","Badminton"];
let results = sports.indexOf("Badminton",3);                     
console.log(results);                                           //4
console.log(sports.indexOf("BasketBall",1));                    //2
console.log(sports.indexOf("BasketBall",3));                    //-1


