/*Numeric sort() ->
- By default, the sort() function sort values as strings.
- This works for strings ("Apple" come berfore "Banana").
- However if numbers are sorted as strings, "25" is bigger than "100" because "2" is bigger than "1".
- Because of this, the sort() method will produce incorrect result when sorting numbers.
- You can fix this by providing a compare function.
*/

const points = [40,100,1,5,25,10];
console.log("Original Array: ",points);

points.sort(function(a,b){
    return a-b;
})

console.log("Sorted Array: ",points);

//Use the same trick to sort an array descending.

const points1 = [40,100,1,5,25,10];
console.log("Original Array: ",points1);

points1.sort(function(a,b){
    return b-a;
})

console.log("Sorted Array: ",points1);