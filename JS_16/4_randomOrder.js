//Sorting an Array in Random order

const points = [40,100,1,5,25,10];
console.log("Original Array: ",points);                        //Original Array:  [ 40, 100, 1, 5, 25, 10 ]

function myFunction(){
    points.sort(function(){
        return 0.5 - Math.random();
    });
    console.log("Randomly Sorted Array: ",points);            //Randomly Sorted Array:  [ 1, 5, 100, 40, 10, 25 ]
}

myFunction();