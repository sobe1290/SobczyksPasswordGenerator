// These are the functions for the buttons on the page.
var generateBtn = document.querySelector("#generate");
var tryAgainBtn = document.querySelector("#tryAgain");

// This is the main function that generates the password.
function generatePassword () {

// These are the variables used in the function, including the arrays of possible characters.
var userSelectedLength;  
var specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var growingString;
var finalPassword =[];
var specialPrompt;
var lowerPrompt;
var upperPrompt;
var numberPrompt;

//This part asks for and validates the length requirement via a while loop.
userSelectedLength = parseInt(prompt("Please enter the length of your desired password. Enter a number between 8 and 128 to continue."));
while ((userSelectedLength <8 || userSelectedLength >128) || !userSelectedLength) {
  userSelectedLength = parseInt(prompt("You must enter a number between 8 and 128"));
}

//This part is the prompt for special characters.
specialPrompt = confirm("Do you want to use special characters?");
if (!specialPrompt) {
  specialPrompt = false;
} else if (specialPrompt) {
  specialPrompt = true;
}
  
//This part is the prompt for lower case letters.
lowerPrompt = confirm("Do you want to use lower case letters?");
if (!lowerPrompt) {
  lowerPrompt = false;
} else if (lowerPrompt) {
  lowerPrompt = true;
}

//This part is the prompt for upper case letters.
upperPrompt = confirm("Do you want upper case letters?");
if (!upperPrompt) {
  uupperPrompt = false;
} else if (upperPrompt) {
  upperPrompt = true;
}

//This part is the prompt for numbers.
numberPrompt = confirm("Do you want to use numbers?");
if (!numberPrompt) {
  numberPrompt= false;
} else if (numberPrompt) {
  numberPrompt = true;
}

//These are all of the if statements for the possible variations for special characters, lower case letters, upper case letters, and numbers. Also adds arrays together.
if (specialPrompt === true && numberPrompt === true && lowerPrompt === true && upperPrompt === true) {
  growingString = specialCharacters.concat(lowerCaseAlphabet, upperCaseAlphabet, numbers); 
};
if (specialPrompt === true && numberPrompt === true && lowerPrompt === true && upperPrompt === false) {
  growingString = specialCharacters.concat(lowerCaseAlphabet, numbers); 
};
if (specialPrompt === true && numberPrompt === true && lowerPrompt === false && upperPrompt === true) {
  growingString = specialCharacters.concat(upperCaseAlphabet, numbers); 
}
if (specialPrompt === true && numberPrompt === false && lowerPrompt === true && upperPrompt === true) {
  growingString = specialCharacters.concat(upperCaseAlphabet, lowerCaseAlphabet); 
};
if (specialPrompt === true && numberPrompt === true && lowerPrompt === false && upperPrompt === false) {
  growingString = specialCharacters.concat(numbers); 
}
if (specialPrompt === true && numberPrompt === false && lowerPrompt === true && upperPrompt === false) {
  growingString = specialCharacters.concat(lowerCaseAlphabet); 
};
if (specialPrompt === true && numberPrompt === false && lowerPrompt === false && upperPrompt === true) {
  growingString = specialCharacters.concat(upperCaseAlphabet); 
};
if (specialPrompt === true && numberPrompt === false && lowerPrompt === false && upperPrompt === false) {
  growingString = specialCharacters; 
};
if (specialPrompt === false && numberPrompt === true && lowerPrompt === true && upperPrompt === true) {
  growingString = numbers.concat(lowerCaseAlphabet, upperCaseAlphabet);
}
if (specialPrompt === false && numberPrompt === true && lowerPrompt === false && upperPrompt === true) {
  growingString = numbers.concat(upperCaseAlphabet);
}
if (specialPrompt === false && numberPrompt === true && lowerPrompt === true && upperPrompt === false) {
  growingString = numbers.concat(lowerCaseAlphabet);
}
if (specialPrompt === false && numberPrompt === true && lowerPrompt === false && upperPrompt === false) {
  growingString = numbers; 
};
if (specialPrompt === false && numberPrompt === false && lowerPrompt === true && upperPrompt === true) {
  growingString = lowerCaseAlphabet.concat(upperCaseAlphabet); 
};
if (specialPrompt === false && numberPrompt === false && lowerPrompt === true && upperPrompt === false) {
  growingString = lowerCaseAlphabet; 
};
if (specialPrompt === false && numberPrompt === false && lowerPrompt === false && upperPrompt === true) {
  growingString = upperCaseAlphabet; 
};

// This part takes the string and keeps adding random characters from the selected arrays until user selected length is reached.
for (var i=0; i < userSelectedLength; i++) {
  var growingStringByLength = growingString[Math.floor(Math.random() * growingString.length)];
  finalPassword.push(growingStringByLength);  
}
  
// This part gets rid of the commas in the array.
function join (){
  finalPassword = finalPassword.join("")
}

join ()

// This part pushes out the final result.
return finalPassword;
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Added a reload button to "try again".
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload.
tryAgainBtn.addEventListener("click", reload, false);

