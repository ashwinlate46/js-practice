/* Min/Max Javascript Methods -> 
- The fastest solution is to use a "homemade" method.
- The function loops through an array comparing each value with the highest value found.
*/

const points = [40,100,1,5,25,10];

function myArrayMax(arr){
    let len = arr.length;
    let max = -Infinity;

    while(len--){
        if(arr[len]>max){
            max = arr[len]
        }
    }
    return max;
}

const highestNumber = myArrayMax(points);
console.log("The highest number is: ",highestNumber);                  //The highest number is:  100