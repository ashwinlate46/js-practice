/* Task-2:
   function  skype(str)
     {
      // str must have "outlook.com" as domain
      // else it is invalid skype
     }

     skype("john@gmail.com")            => invalid skype id
     skype("john@outlook.com")        => verified

*/

function skype(str){
    if(str.endsWith("@gmail.com")){
        console.log("Invalid Skype Id");
    }
    else{
        console.log("Verified")
    }
}
skype("john@gmail.com")       // Invalid
skype("john@outlook.com")     // Verified