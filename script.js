// array of special characters
var specialcharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','?', '/','{','}',';','>','<']

// array of lowercase letters
var lowercaseletters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

// array of uppercaseletters
var uppercaseletters = ['Q','W','E','R','T','Y','Y','U','I','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

