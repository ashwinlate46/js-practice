/*Find the lowest or (highest) Array value ->
- There are no built-in function for finding the max or min value in an array.
- However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
- sorting ascending
- sorting descending 
*/

// sorting ascending
const points = [40,100,1,5,25,10];
points.sort(function(a,b){
    return a-b;
});

const lowestValue = points[0];
const highestValue = points[points.length - 1];

console.log("The Lowest Value in Array is: ",lowestValue);                            //The Lowest Value in Array is:  1
console.log("The Highest Value in Array is: ",highestValue);                          //The Highest Value in Array is:  100
 
// sorting descending 

const marks = [75,93,67,83,49,84];

marks.sort(function(a,b){
    return b-a;
});

const lowestValueinArray = marks[marks.length-1];
const highestValueinArray = marks[0]

console.log("The Lowest Value in Array is: ",lowestValueinArray);                       //The Lowest Value in Array is:  49
console.log("The Highest Value in Array is: ",highestValueinArray);                     //The Highest Value in Array is:  93