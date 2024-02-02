/*Else-if ->
- It is a decision making approach where we provide multiple options for handling specific task.
- User can choose any one from the given set.
- It also allows to handle multiple blocks for same condition.
*/

let time = 10;

if (time <= 12) {
    console.log("Good Morning");
}
else if (time > 12 && time <= 19) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}

/* 2. Write a program to print greatest among 3 numbers.

    function FindLargest(a, b, c)
    {
    }
   
    FindLargest(10, 20, 4);            => b is greater than a & c
    FindLargest(10, 3, 5);            => a is greater than b & c
    FindLargest(10, 20, 30);            => c is greater than a & b */

function FindLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`A ${a} is greater than b ${b} and c ${c}`)
    }
    else if (b > c) {
        console.log(`B ${b} is greater than a ${a} and c ${c}`);
    }
    else {
        console.log(`C ${c} is greater than a ${a} and b ${b}`);
    }
}

FindLargest(10, 20, 4);
FindLargest(10, 3, 5);
FindLargest(10, 20, 30);

/*3. Check if a triangle is equilateral, scalene, or isosceles

  function findTriangleType(side1, side2, side3)
      {

      }

findTriangleType(12,12,12)             //"Equilateral triangle."
findTriangleType(20,20,31)             //"Isosceles triangle."
findTriangleType(5,4,3)                //"Scalene triangle." */

function findTriangleType(side1,side2,side3){
    if(side1===side2 && side2===side3){
        console.log("Equilateral triangle.");
    }
    else if(side1===side2 || side2===side3 || side1===side3){
        console.log("Isosceles triangle.");
    }
    else{
        console.log("Scalene triangle");
    }
}

findTriangleType(12,12,12);
findTriangleType(20,20,31);
findTriangleType(5,4,3);