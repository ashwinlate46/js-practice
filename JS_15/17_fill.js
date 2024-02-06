/*fill() ->
- The fill() method fills specified elements in an array with a value.
- The fill() method overwrites the original array.
- Start and end position can be specified. If not, all elements will be filled.

- Syntax -> 
           array.fill(value, start, end)
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Orange"));                           //[ 'Orange', 'Orange', 'Orange', 'Orange' ]
console.log(fruits.fill("Kiwi"));                             //[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

console.log(fruits.fill("Kiwi",2,4));                        //  Banana,Orange,Kiwi,Kiwi