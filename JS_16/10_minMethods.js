function myArrayMin(arr){
    let len = arr.length;
    let min = Infinity;

    while(len--){
        if(arr[len]<min){
            min = arr[len]
        }
    }
    return min;
}

const points = [40,100,1,5,25,10];
const lowestNumber = myArrayMin(points);

console.log("The lowest number is: ",lowestNumber);                     //The lowest number is:  1