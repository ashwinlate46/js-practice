/* search() ->
- The search() method searches a string (or a regular expression) and returns the position of the match.
*/
let text = "please locate where 'locate' occurs!";
let index = text.search("locate");
console.log(index);            // 7

/* Note - 
- The two methods indexOf() and search() are equal
- They accept the same argments(parameters) and return the same value?
- The two methods are NOT equal. 
- The search() method can not take a second start position argument.
- The indexOf() method can not take a powerful search values (regular expression).
*/