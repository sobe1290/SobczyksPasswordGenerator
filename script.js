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



function generatePassword () {

  userSelectedLength = parseInt(prompt("Please enter the length of your desired password. Enter a number between 8 and 128 to continue."));
    if (!userSelectedLength) {
      alert("You must enter a number between 8 and 128");
    } else if (userSelectedLength <8 || userSelectedLength >128) {
      userSelectedLength = parseInt(prompt("You must enter a number between 8 and 128"));
    } 

    console.log(userSelectedLength)
    
    specialCharacters = confirm("Do you want to use special characters?");
      if (!specialCharacters) {
        specialCharacters = false;
      } else if (specialCharacters) {
        specialCharacters = true;
      }
      
    lowerCaseAlphabet = confirm("Do you want to use lower case letters?");
      if (!lowerCaseAlphabet) {
        lowerCaseAlphabet = false;
      } else if (lowerCaseAlphabet) {
        lowerCaseAlphabet = true;
      }


    upperCaseAlphabet = confirm("Do you want upper case letters?");
      if (!upperCaseAlphabet) {
        upperCaseAlphabet = false;
      } else if (upperCaseAlphabet) {
        upperCaseAlphabet = true;
      }

    numbers = confirm("do you want numbers");
      if (!numbers) {
        numbers= false;
      } else if (numbers) {
        numbers = true;
      }
  

  if (selectedCharacters === true && selectedNumbers === true && selectedLower === true && selectedUpper === true) {
    growingString = specialCharacters.concat(lowerCaseAlphabet, upperCaseAlphabet, numbers); 
  };
  if (selectedCharacters === true && selectedNumbers === true && selectedLower === true && selectedUpper === false) {
    growingString = specialCharacters.concat(lowerCaseAlphabet, numbers); 
  };
  if (selectedCharacters === true && selectedNumbers === true && selectedLower === false && selectedUpper === true) {
    growingString = specialCharacters.concat(upperCaseAlphabet, numbers); 
  }
  if (selectedCharacters === true && selectedNumbers === false && selectedLower === true && selectedUpper === true) {
    growingString = specialCharacters.concat(upperCaseAlphabet, lowerCaseAlphabet); 
  };
  if (selectedCharacters === true && selectedNumbers === true && selectedLower === false && selectedUpper === false) {
    growingString = specialCharacters.concat(numbers); 
  }
  if (selectedCharacters === true && selectedNumbers === false && selectedLower === true && selectedUpper === false) {
    growingString = specialCharacters.concat(lowerCaseAlphabet); 
  };
  if (selectedCharacters === true && selectedNumbers === false && selectedLower === false && selectedUpper === true) {
    growingString = specialCharacters.concat(upperCaseAlphabet); 
  };
  if (selectedCharacters === true && selectedNumbers === false && selectedLower === false && selectedUpper === false) {
    growingString = specialCharacters; 
  };
  if (selectedCharacters === false && selectedNumbers === true && selectedLower === true && selectedUpper === true) {
    growingString = numbers.concat(lowerCaseAlphabet, upperCaseAlphabet);
  }
  if (selectedCharacters === false && selectedNumbers === true && selectedLower === false && selectedUpper === true) {
    growingString = numbers.concat(upperCaseAlphabet);
  }
  if (selectedCharacters === false && selectedNumbers === true && selectedLower === true && selectedUpper === false) {
    growingString = numbers.concat(lowerCaseAlphabet);
  }
  if (selectedCharacters === false && selectedNumbers === true && selectedLower === false && selectedUpper === false) {
    growingString = numbers; 
  };
  if (selectedCharacters === false && selectedNumbers === false && selectedLower === true && selectedUpper === true) {
    growingString = lowerCaseAlphabet.concat(upperCaseAlphabet); 
  };
  if (selectedCharacters === false && selectedNumbers === false && selectedLower === true && selectedUpper === false) {
    growingString = lowerCaseAlphabet; 
  };
  if (selectedCharacters === false && selectedNumbers === false && selectedLower === false && selectedUpper === true) {
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

