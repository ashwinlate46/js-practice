/*Task-1:
          function  email(str)
      {
          var id = ? str
                  var domain = ?
          document.write(`id=${id} <br> domain=${domain}`);
      }

     email("john123@gmail.com")        =>  id=john123,  domain=gmail.com
     email("david@outlook.com")            => id=david, domain=outlook.com 
*/

function email(str){
    var id = str.substring(0,str.indexOf("@"));
    var domain = str.substring(str.indexOf("@")+1);
 
    console.log(`id=${id}`)
    console.log(`domain=${domain}`)
}
email("john123@gmail.com");

function outlook(str){
    var id = str.slice(0,str.indexOf("@"));
    var domain = str.slice(str.indexOf("@")+1);

    console.log(`id=${id}`);
    console.log(`domain=${domain}`);
}
outlook("david@outlook.com")
