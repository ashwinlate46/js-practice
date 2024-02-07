/*The Fisher Yates() Method ->
- The most popular correct method is called the Fisher Yates Shuffle and was introduced in data science as early as 1938.
- Commonly used to Random Shuffle the elements in Array.
*/

const points = [40,100,1,5,25,10];
console.log("Original Array: ",points);                            //Original Array:  [ 40, 100, 1, 5, 25, 10 ]

for(let i=points.length-1; i>0; i--){
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
console.log("Shuffled Array: ",points);                             //Shuffled Array:  [ 5, 40, 1, 10, 25, 100 ]