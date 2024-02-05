/*Array -> 
- Array is a special type of variable, which can store multiple values using special syntax.
- Every Value is associated with numeric index starting with 0.
- JavaScript array can handle values of different data types.
- Array size can change dynamically in Javascript, however it is restricted for other programming languages [c, c++, java, c#..]
*/

/*Creating an Array ->
- Array is declared by using var, let or const.
- Array name is just similar to other variable name you defined, however according to project traditions we define a plural name for array.

        var products;
        let categories;
        const users;  => requires initialization

- Array have to handle multiple values, hence you have to initialize or assign memory for array.
- Array memory is configured using 2 techniques

        a) [ ]            array meta character
        b) Array()        array constructor

- Using an Array literal is the easiest way to create JS array.

Syntax -> 
         const array_name = [item1, item2, ----];

- It is common practice to declare array with the const keywords.

*/

//Ex- >
const cars = ["bolero","swift","hyundai"];
console.log(cars);   //[ 'bolero', 'swift', 'hyundai' ]

//You can also create an Array, and then provide the elements.

const bikes = [];
bikes[0] = "Yamaha";
bikes[1] = "Hero";
bikes[2] = "TVS";
bikes[3] = "Jupiter";

console.log(bikes);

/*Using the Javascript keyword new ->
  - "new"  is dynamic memory allocating operator. 
  - It allocates a discreet memory for array using "Array()" constructor. 
  - Memory allocated for a request will be destroyed after the request. 
  - It is newly allocated for every request.
*/

const cars1 = new Array("BMW","Range Rover","Scorpio","Thar");
console.log(cars1);

/*FAQ: How data is stored in an Array?
Ans : You can intialize data while declaring or you can assign with reference of property.
     Array property is a string type that maps to index number in memory.
     Array always refers using a property.

     let  values = [ ];
     values[0] = 10;            0 is string  => value is number
     values["1"] = 20;            1 is string  => value is number
     values["2"] = true;            2 is string  => value is boolean
*/

/*Accssing Array Elements ->
- You can access an Array elements by referring to the index numbers.
*/

const subjects = ["Phy","Bio","Che","Math"];
console.log(subjects[0]);      //Phy
console.log(subjects[1]);      //Bio
console.log(subjects[2]);      //Che
console.log(subjects[3]);      //Math

/*Changing an Array Element ->
- This statement changes the value of the first elements in array.
*/

const city = ["HYD","MUM","KOL","DEL"];
console.log(city);           //[ 'HYD', 'MUM', 'KOL', 'DEL' ]

city [0] = "PUNE";
console.log(city);           //[ 'PUNE', 'MUM', 'KOL', 'DEL' ]

city [2] = "NOIDA";
console.log(city);           //[ 'PUNE', 'MUM', 'NOIDA', 'DEL' ]

/*FAQ: What type of data can be stored in Array?
Ans:  Array memory can handle any type of data
        a) Primitive
        b) Non Primitive
        c) Function
        d) Class

Syntax:
       var values = [ 10, "A", true, [ ], function() { } ];

        values[3][ ]        => acessing array stored at memory reference 3
        values[4]()        => Immediately Invoking Function expression at 4. [IIFE]

        Note: A function without name is known as "Anonymous Function".
*/

var values = [[10, 20, 30], ["Delhi", ["Hyd","Chennai"]]];

console.log(values[1][0]);          //Delhi
console.log(values[0][2]);          //30

console.log(values[1][1][1]);       //Chennai