/* switch() ->
- Switch is used to interrupt the flow of electrons in a circuit.
- Switches are classified into various type like:
    toggle, push button, joystick, selector..
- A selector switch executes only the block that matches the given condition.
- It improves the performance of application when there are multiple choices.

Syntax:
    switch(value | expression)
    {
      case value | expression:
         statements;
         jump_statement;
      default:
         statements when value | expression mismatch;
         jump_statement;
    }
    */

let day = 6;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}


//Find the area of circle, triangle and rectangle?

let area = "Area of Circle, triangle and rectangle";
let PI = 3.14, l = 5, b = 4, r = 3;
area = "Rectangle";
switch (area) {
    case 'Circle':
        console.log("Area of Circle is : " + PI * r * r);       //Area of Circle is : 28.259999999999998
        break;
    case 'Triangle':
        console.log("Area of Triangle is : " + (l + b) / 2 );   //Area of Triangle is : 4.5
        break;
    case 'Rectangle':
        console.log("Area of Rectangle is : " + l * b );       //Area of Rectangle is : 20
        break;

    default:
        console.log("Please enter valid data");
        break;
}