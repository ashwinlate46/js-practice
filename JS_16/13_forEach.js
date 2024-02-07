/*Javascript Array iteration ->
- Array iteration methods operate on every array item.
*/

/*JS Array forEach() ->
- The forEach() method calls a function (a callback function) once for each array element.
*/

const numbers = [45,4,9,16,25];
let txt = "";

numbers.forEach(function (value,index,array) {
    txt += value + "\n";
});

console.log(txt);

/*op->
45
4
9
16
25
*/


/*Note that the function takes 3 arguments ->
- The item value
- The item index
- The array iteself
*/

const number = [45,4,9,16,25];
let text = "";

number.forEach(function(value){
    text = text + value + "\n";
});

console.log(text);

/*op ->
45
4
9
16
25
*/