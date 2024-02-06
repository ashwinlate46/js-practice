/*slice() ->
- The slice() method slices out a piece of an Array into a new Array.
- The slice() method creates a new Array.
- The slice() method does not remove any element from the source Array.
- The slice() method  It reads and returns elements with in specified index range.
Syntax -> 
          arr.slice(start)
          arr.slice(start,end)

                    0    1    2    3
          var a = ["A", "B", "C", "D"]
                   -4   -3    -2   -1
*/

const fruits = ["Mango","Guava","Apple","Orange","Pineapple"];
console.log(fruits.slice(1));                                  //[ 'Guava', 'Apple', 'Orange', 'Pineapple' ]
console.log(fruits.slice(-2));                                 //[ 'Orange', 'Pineapple' ]
console.log(fruits.slice(-4,-1));                              //[ 'Guava', 'Apple', 'Orange' ]
console.log(fruits.slice(1,3));                                //[ 'Guava', 'Apple' ]


