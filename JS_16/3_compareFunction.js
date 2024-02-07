/*compare function ->
- The purpose of the compare function is to define an alternative sort order.
- The compare function should return a negative, zero, or positive value depending on the arguments.
- function (a,b) {return a-b}
*/

const people = [
    {name:"John", age:30},
    {name:"Alice", age:25},
    {name:"Bob", age:35},
];

//Sorting the array of objects by age using a compare function.

people.sort(function(a,b){
    return a.age - b.age;
});

//Display the sorted Array.

console.log("Sorted By Age: ",people);

/*op ->
Sorted By Age:  [
  { name: 'Alice', age: 25 },
  { name: 'John', age: 30 },
  { name: 'Bob', age: 35 }
]
*/