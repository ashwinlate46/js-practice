/* if_else -> 
- The if statement executes a statement if a specified condition is true. 
- If the condition is false, another statement can be executed.
*/

let tomorrow = "Sunny";

if (tomorrow === "Rainy") {
    console.log("You Need to take a raincoat")
}
else {
    console.log("You don't need to take a raincoat")
}

// Output -> You don't need to take a raincoat


//Even or Odd Number

let num = 36;

if (num % 2 === 0) {
    console.log("Even Number");
}
else {
    console.log("Odd Number");
}

// Output -> Even Number

/*Write a program that works out whether if a given year is a leap year or not?
A normal year has 365 days, leap years have 366, with an extra day in February.*/

const year = 2021;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("The year " + year + " is a leap year.");
        }
        else {
            console.log("The year " + year + " is not a leap year.");
        }
    }
    else {
        console.log("The year " + year + " is a leap year.");
    }
}
else {
    console.log("The year " + year + " is not leap year.");
}

/*1. Write a program to find range of value.

        function FindRange(number, min, max)
        {
        }

        FindRange(2, 20, 30);        => your number 2 is not in range of 20 to 30.
        FindRange(2, 1, 10);        => your number 2 is in range of 1 to 10.
*/

function FindRange(number,min,max)
{
    if(number>=min && number<=max){
        console.log(`Your number ${number} is in range of ${min} to ${max}.`);
    }
    else{
        console.log(`Your number ${number} is out of range`);
    }
}
FindRange(2, 20, 30); 