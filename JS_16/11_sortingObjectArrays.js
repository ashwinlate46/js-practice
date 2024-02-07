//Javascript arrays often contain objects.

const cars = [
    {type:"Volvo", year:2016},
    {type:"Hyundai", year:2001},
    {type:"BMW", year:2010},
];

console.log("Before Sorting: ");
console.log(cars);
/*op->
Before Sorting: 
[
  { type: 'Volvo', year: 2016 },
  { type: 'Hyundai', year: 2001 },
  { type: 'BMW', year: 2010 }
]
*/

cars.sort(function (a,b) {
    return a.year - b.year;
});

console.log("After Sorting: ");
console.log(cars);

/*op->
After Sorting:
[
  { type: 'Hyundai', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 }
]
*/