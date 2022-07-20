// These are the references to the html selectors for password length
/*var selectedCharacters = document.querySelector("#specialCharacter");
var selectedNumbers = document.querySelector("#numbers");
var selectedLower = document.querySelector("#lowerCase");
var selectedUpper = document.querySelector("#upperCase");
var userSelectedLength = document.querySelector("#length");*/
var generateBtn = document.querySelector("#generate");

var selectedCharacters = false;
var selectedNumbers = true;
var selectedLower= false;
var selectedUpper= true;
var userSelectedLength= 15;


  
var specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var growingString;
var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];    
var randomLowerCaseAlphabet = lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
var randomUpperCaseAlphabet = upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];


function generatePassword () {
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

  console.log(growingString)
}


/*function generatePassword () { 

    function characterExpander() {
      for (growingString; growingString.length <8; i++){
        conditionalRandomPusher();
      };

      for (growingString; growingString.length < userSelectedLength; i++){
        conditionalRandomPusher();
      };
      /*for (growingString.length; growingString.length >128; growingString.length--){
          growingString.push(selectedRandomPool)
      }
    }

    characterExpander();
    console.log(growingString);*/




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

