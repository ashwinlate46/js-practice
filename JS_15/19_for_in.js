/* for..in : 
- It is a statement that returns all properties from collection.
- The JavaScript for in statement loops through the properties of an Object.

            Syntax:
                for(var property in collection)
                {
                }
*/

const numbers = [45, 4, 9, 16, 25];

let txt = "";

for(let x in numbers){
    txt = txt + " " +  numbers[x];
}

console.log(txt);