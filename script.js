// array of special characters
var specialcharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','?', '/','{','}',';','>','<']

// array of lowercase letters
var lowercaseletters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

// array of uppercaseletters
var uppercaseletters = ['Q','W','E','R','T','Y','Y','U','I','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']

//Onclick event when button is pressed

generateBtn.addEventListener("click", passwordChar);



// On generate button open prompt question
function passwordChar()   {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?') 
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
  return;
}

// Condition to check if you want special characters




// Condition to check if you want numeric characters



//Condition to check if you want lowercase characters



//Condition to check if you want uppercase characters