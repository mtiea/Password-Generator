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


// On generate button open prompt question

function getpasswordoptions(){
var lenth = parseInt(prompt("How many characters would you like your password to contain?"))
}
// Condition to check if answer is a number
if (isNaN)(length == true) {
    alert('Password length must be provided as a number'); 
    
}
// Condition to check if answeris less than 8 characters, if less than 8 then an alert will keep showing
 if (length < 8) {
   alert("Password length must be 8 characters or more"); return;
 }

// Condition to check if answer is less than 128 characters, if less then an alert will show
if (length > 128) {
  alert("Password must be 128 characters or less")
}