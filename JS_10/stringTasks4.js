/*Task4-  Write a function to convert text into sentence case.
        [first letter is caps]

         function SentenceCase(str)
        {
            // print in sentence case
        }

        SentenceCase("welcome to javascript");  => Welcome to javascript.
        SentenceCase("the script");                => The script
*/

function SentenceCase(str){
    var a = str.charAt(0);
    var b = str.substring(1);

    var c = a.toUpperCase() + b;

    console.log(c);
}
SentenceCase("welcome to javascript");       //Welcome to javascript


function SentenceCase1(str){
    var a = str.charAt(0);
    var b = str.slice(1);

    var c = a.toUpperCase() + b;

    console.log(c);
}
SentenceCase1("the script");                //The script