// array of special characters
var specialcharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','?', '/','{','}',';','>','<']

// array of lowercase letters
var lowercaseletters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']

// array of uppercaseletters
var uppercaseletters = ['Q','W','E','R','T','Y','Y','U','I','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']

// array of numeric characters
var numericcharacters = ['1','2','3','4','5','6','7','8','9']

//Onclick event when button is pressed
//generateBtn.addEventListener('click', passwordChar;)

// referance to the #generate element
var generateBtn = document.querySelector("#generate")

// On generate button open prompt question
document.getElementById("generate").addEventListener("click", function()   {
      var length = parseInt(prompt('How many characters would you like your password to contain?'));

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
}

  // Condition to check if you want special characters
  var specialCharacters =  confirm("Click OK to confirm using special characters");
  
  
  
  
  // Condition to check if you want numeric characters
  var numericCharacters = confirm("Click OK to confirm using numeric characters");
  
  
  //Condition to check if you want lowercase characters
  var lowercaseLetters = confirm("Click OK to confirm using numeric characters");
  
  
  //Condition to check if you want uppercase characters
  var uppercaseLetters = confirm("Click OK to confirm using uppercase letters");
})
//Staments to add if the user does not include at least one special character.
 if (
   
   hasnumericCharacters === false &&
   haslowercaseLetters === false &&
   hasuppercaseLetters === false 
  ) {
   alert('Password must include at least one character type');
     
   }
  
  


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);






















// write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');


  passwordText.value = password;
}
 








 //write password to the password input
var password = generatePassword();
var passwordText = document.querySelector('#password');


passwordText.value = password;
   
