/*Using Math.min() on an Array ->
- You can use the Math.min.apply to find the lowest number in an array.
*/

function myArrayMin(arr){
    return Math.min.apply(null,arr);
}

const points = [40,100,1,5,25,10];
const lowestValue = myArrayMin(points);

console.log("The lowest value is: ",lowestValue);                            //The lowest value is:  1
