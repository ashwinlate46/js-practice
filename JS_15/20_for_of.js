/*for..of : It is a statement that returns all values from collection

            Syntax:
                for(var  value of collection)
                {
                }
*/

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + " ";
}
console.log(text);