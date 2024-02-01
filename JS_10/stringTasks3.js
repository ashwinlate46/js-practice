/*Task-3:
          function  GetSentence(str)
      {
            // print sentence by removing spaces.
      }

     GetSentence("Welcome to JavaScript");    => WelcometoJavaScript
*/

function GetSentence(str){
    var trimStr = str.trim();
    console.log(trimStr);
}
GetSentence("      Welcome to JavaScript    ");    //Welcome to JavaScript