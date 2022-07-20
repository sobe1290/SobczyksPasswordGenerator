// These are the references to the html selectors for password length
/*var selectedCharacters = document.querySelector("#specialCharacter");
var selectedNumbers = document.querySelector("#numbers");
var selectedLower = document.querySelector("#lowerCase");
var selectedUpper = document.querySelector("#upperCase");
var userSelectedLength = document.querySelector("#length");*/
var generateBtn = document.querySelector("#generate");

var selectedCharacters = true;
var selectedNumbers = true;
var selectedLower= true;
var selectedUpper= true;
var userSelectedLength= 15;

var slider = document.getElementById("myRange");
var output = document.getElementById("selectedLength");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

  
  var specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var growingString ="";
  var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];    
  var randomLowerCaseAlphabet = lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
  var randomUpperCaseAlphabet = upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
  var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  console.log (growingString)

function generatePassword () {
  if (selectedCharacters === true) {
    growingString.concat("", specialCharacters[Math.floor(Math.random() * specialCharacters.length)]); 
  };
  if (selectedNumbers === true) {
    growingString.concat("", numbers[Math.floor(Math.random() * numbers.length)]);
  };
  if (selectedLower === true) {
    growingString.concat("", lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)]);
  };
  if (selectedUpper === true) {
    growingString.concat("", numbers[Math.floor(Math.random() * numbers.length)]);
  };

    function characterExpander() {
      for (growingString; growingString.length <8; growingString++){
      };

      for (growingString; growingString.length < userSelectedLength; growingString++){
      };
      /*for (growingString.length; growingString.length >128; growingString.length--){
          growingString.push(selectedRandomPool)
      }*/
    }

  characterExpander();

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

writePassword()  //this was just put here to test in console

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

