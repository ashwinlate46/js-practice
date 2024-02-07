/*Using Math.max() on an array ->
- You can use math.max.apply() to find the highest number in an array.
*/

function myArrayMax(arr) {
    return Math.max.apply(null,arr);
}

const points = [40,100,1,5,25,10];
const highestNumber = myArrayMax(points);

console.log("The highest number is: ",highestNumber);                           //The highest number is:  100