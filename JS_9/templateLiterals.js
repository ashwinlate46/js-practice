/*Synonyms -> 
1.Template Literals
2.Template Strings
3.String Templates
4.Back-Tick Syntax
*/

/*Back-Tick Syntax ->
- Template literals use back-ticks(` `) rather than the quotes (" ") to define a strings.
*/

let text = `Hello World!`;
console.log(text)

/*Quotes Inside Strings ->
- With template literals, you can use both single and double qoutes inside a strings.
*/

let text1 = `He's often called "Johnny"`;
console.log(text1);

/*Multiline Strings ->
- Template literals allows multiline strings.
*/

let text2 = 
`The quick
brown fox
jumps over
the lazy dog`;

console.log(text2);

/*Interpolation ->
- Template literals provide an easy way to interpolate variables and expressions into strings.
- This method is called Interpolation.
*/

let firstName = "Ashwin";
let lastName = "Late";

let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);