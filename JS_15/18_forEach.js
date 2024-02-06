/*foreach() ->
- The forEach() method calls a function for each element in an array.
- The forEach() method is not executed for empty elements.
- Syntax ->
           array.forEach(function(currentValue, index, arr), thisValue)
*/

const fruits = ["Apple","Mango","Pineapple","Litchi"];
fruits.forEach(function(value,index){
    console.log(index + " : " + value );
})

/*op->
0 : Apple
1 : Mango
2 : Pineapple
3 : Litchi
*/