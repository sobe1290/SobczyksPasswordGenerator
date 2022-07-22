// These are the references to the prompt selectors for password length
/*var selectedCharacters = document.querySelector("#specialCharacter");
var selectedNumbers = document.querySelector("#numbers");
var selectedLower = document.querySelector("#lowerCase");
var selectedUpper = document.querySelector("#upperCase");
var userSelectedLength = document.querySelector("#length");*/
var generateBtn = document.querySelector("#generate");
var tryAgainBtn = document.querySelector("#tryAgain");

var selectedCharacters;
var selectedNumbers;
var selectedLower;
var selectedUpper;
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
var lengthPrompt;



function generatePassword () {

  userSelectedLength = parseInt(prompt("Please enter the length of your desired password. Enter a number between 8 and 128 to continue."));
    if (!userSelectedLength) {
      alert("You must enter a number between 8 and 128");
    } else if (userSelectedLength <8 || userSelectedLength >128) {
      userSelectedLength = parseInt(prompt("You must enter a number between 8 and 128"));
    } // while not user selected length, forces user to enter var.
    
    specialPrompt = confirm("Do you want to use special characters?");
      if (!specialPrompt) {
        specialPrompt = false;
      } else if (specialPrompt) {
        specialPrompt = true;
      }
      
    lowerPrompt = confirm("Do you want to use lower case letters?");
      if (!lowerPrompt) {
        lowerPrompt = false;
      } else if (lowerPrompt) {
        lowerPrompt = true;
      }

    upperPrompt = confirm("Do you want upper case letters?");
      if (!upperPrompt) {
        uupperPrompt = false;
      } else if (upperPrompt) {
        upperPrompt = true;
      }

    numberPrompt = confirm("do you want numbers");
      if (!numberPrompt) {
        numberPrompt= false;
      } else if (numberPrompt) {
        numberPrompt = true;
      }

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

  
  for (var i=0; i < userSelectedLength; i++) {
    var growingStringByLength = growingString[Math.floor(Math.random() * growingString.length)];
    finalPassword.push(growingStringByLength);
    
  }
  
function join (){
  finalPassword = finalPassword.join("")
}

join ()

return finalPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
tryAgainBtn.addEventListener("click", reload, false);

