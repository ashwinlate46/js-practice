/*Task-5:  
    Write a function to convert text into title case
        [every word first letter caps]

        function TitleCase(str)
        {

        }

        TitleCase("welcome to javascript");  => Welcome To JavaScript
*/

function TitleCase(str){
    var [a, b, c] = str.split(' ');
    var a = a.charAt(0).toUpperCase() + a.substring(1,) + " ";
    var b = b.charAt(0).toUpperCase() + b.substring(1,) + " ";
    var c = c.charAt(0).toUpperCase() + c.substring(1,);

    console.log(a+b+c);
}

TitleCase("welcome to javascript");         //Welcome To Javascript