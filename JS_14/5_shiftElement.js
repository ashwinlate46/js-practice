/*shifting elements ->
- Shifting is equivalent to popping but working on the first element instead of the last
*/

/*shiftElement() -> 
- The shift() method removes the first Array element and "shift" all other elements to a lower index.
*/
const fruits = ["Mango", "Guava", "Apple", "Orange", "Pineapple"];
console.log(fruits.shift());                 //Mango
console.log(fruits);                         //[ 'Guava', 'Apple', 'Orange', 'Pineapple' ]

//The shift() method returns the value that was shifted out

const cars = ["Swift", "XUV", "KIA", "Magnite"];
let car = cars.shift();
console.log(cars);           //[ 'XUV', 'KIA', 'Magnite' ]
console.log(car);            //Swift