/* match() ->
- The match() method returns an array containing the results of matching a string against a string (or a regular expressions)
*/

//Example -> Perform a search for "ain".

let text = "The rain in SPAIN stays mainly in the plain";
let myArr = text.match("ain");
console.log("Length of Array: ",myArr.length + " " + myArr);

// We can also write 
let myArr1 = text.match(/ain/);
console.log(myArr1);             /*[
                                     'ain',
                                      index: 5,
                                      input: 'The rain in SPAIN stays mainly in the plain',
                                      groups: undefined
                                    ]
                                 */

// Perform a global search for "ain".

let text1 = "The rain in SPAIN stays mainly in the plain";
let myArr2 = text.match(/ain/g);
console.log(myArr2.length + " " + myArr2);      // 3 ain,ain,ain

// Perform a global, case insensitive search for "ain".

let text2 = "The rain in SPAIN stays mainly in the plain";
let myArr3 = text.match(/ain/gi);                     //[ 'ain', 'AIN', 'ain', 'ain' ]
console.log(myArr3.length + " " + myArr3);            //4 ain,AIN,ain,ain

/* Note ->
- In a regular expression does not include the g modifier(global search). match() will remain only the first match in the string.
*/
