// array of special characters
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','?', '/','{','}',';','>','<']

// array of lowercase letters
var lowercaseLetters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

// array of uppercaseletters
var uppercaseLetters = ['Q','W','E','R','T','Y','Y','U','I','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']

// array of numeric characters
var numericCharacters = ['1','2','3','4','5','6','7','8','9']

//Onclick event when button is pressed
//generateBtn.addEventListener('click', passwordChar;)

// referance to the #generate element
var generateBtn = document.querySelector("#generate")

// On generate button open prompt question
 document.getElementById("generate").addEventListener("click", function()   {
       var length = parseInt(prompt('How many characters would you like your password to contain?')
       );
 
   // Condition to check if answer is a number
    if (isNaN(length) === true) {
        alert('Password length must be provided as a number'); 
        return;                                                                                                                              
        
 }
   // Condition to check if answer is less than 8 characters, if less than 8 then an alert will keep showing
      if (length < 8) {
        alert('Password length must be 8 characters or more'); 
        return;
  }
 
   // Condition to check if answer is less than 128 characters, if less then an alert will show
   if (length > 128) {
     alert("Password must be 128 characters or less");
 
 
 //Create variables to add charaacters to password when clicked OK 
     var hasspecialCharacters =  confirm('Click OK to confirm using special characters');
     
     var hasnumericCharacters = confirm('Click OK to confirm using numeric characters');
     
     var haslowercaseLetters = confirm('Click OK to confirm using numeric characters');
    
     var hasuppercaseLetters = confirm('Click OK to confirm using uppercase letters');
}
   
 
 // Staments to add if the user does not include at least one special character.
 if (hasspecialCharacters === false &&
     hasnumericCharacters === false &&
     haslowercaseLetters === false &&
     hasuppercaseLetters === false ) {
     alert('Password must include at least one character type');
     
   }
  
  
//objects to store user input
   var passwordOptions = {
     length: length,
     hasspecialCharacters: hasspecialCharacters,
     hasnumericCharacters: hasnumericCharacters,
     haslowercaseLetters: haslowercaseLetters,
     hasuppercaseLetters: hasuppercaseLetters
  };
    return passwordOptions;
    
   })
 







 //write password to the password input
  //var password = generatePassword();
  //var passwordText = document.querySelector('#password');
//
//
  //passwordText.value = password;
   
