//Comparing string properties is a little more complex

const cars = [
    {type:"Volvo", year:2016},
    {type:"Hyundai", year:2001},
    {type:"BMW", year:2010},
];

/*Before Sorting: 
[
  { type: 'Volvo', year: 2016 },
  { type: 'Hyundai', year: 2001 },
  { type: 'BMW', year: 2010 }
]
*/

console.log("Before Sorting: ");
console.log(cars);

cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

console.log("After sorting based on type: ");
console.log(cars);

/*After sorting based on type: 
[
  { type: 'BMW', year: 2010 },
  { type: 'Hyundai', year: 2001 },
  { type: 'Volvo', year: 2016 }
]
*/