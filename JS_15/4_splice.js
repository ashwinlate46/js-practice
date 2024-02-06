/*splice() ->
- The splice() method can be used to add new items to an array.
- The splice() array method in JS is used to change the content of an Array by replacing or removing an existing element and adding a new element at that place.

Syntax -> 
arr.splice(start);
arr.splice(start,deleteCount);
arr.splice(start,deleteCount,item1);
arr.splice(start,deleteCount,item1,item2,itme N)
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);                                           //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

// At position 2, add 2 elements: 
console.log(fruits.splice(2,0,"Cherry","Kiwi"));              
console.log(fruits);                                           //['Banana', 'Orange','Cherry','Kiwi','Lemon','Apple','Mango']

//At position 2, remove 2 items:
console.log(fruits.splice(2,2));                               //[ 'Cherry', 'Kiwi' ]
console.log(fruits);                                           //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

//At position 2, add new items, and remove 1 item:
console.log(fruits.splice(2, 1, "Cherry", "Kiwi"));            //[ 'Lemon' ]
console.log(fruits);                                           //[ 'Banana', 'Orange', 'Cherry', 'Kiwi', 'Apple', 'Mango' ]