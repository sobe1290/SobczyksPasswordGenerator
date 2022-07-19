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
var userSelectedLength = 15;




//This section takes one character at random from the selected string.

function generatePassword () {
  
  //This section defines the base strings of all available characters.
  var specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var growingString = [];
  var selectedRandomPool = [];

  var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  var randomLowerCaseAlphabet = lowerCaseAlphabet[Math.floor(Math.random() * lowerCaseAlphabet.length)];
  var randomUpperCaseAlphabet = upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
  var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  //This section has the if statements that if an item is selected on the form, then a random character from that string will be added to growingString
  
  
  function addRandomSpecialChar () {
    selectedRandomPool.push(randomSpecialCharacter);
  }
  function addRandomNumbers () {
    selectedRandomPool.push(randomNumbers);
  }
  function addRandomLowerCase () {
    selectedRandomPool.push(randomLowerCaseAlphabet);
  }
  function addRandomUpperCase () {
    selectedRandomPool.push(randomUpperCaseAlphabet);
  }
  
  if (selectedCharacters === true) {
    growingString.push(randomSpecialCharacter); 
    addRandomSpecialChar (); 
  };
  if (selectedNumbers === true) {
    growingString.push(randomNumbers);
    addRandomNumbers ();
  };
  if (selectedLower === true) {
    growingString.push(randomLowerCaseAlphabet);
    addRandomLowerCase ();
  };
  if (selectedUpper === true) {
    growingString.push(randomUpperCaseAlphabet);
    addRandomUpperCase ();
  };
  //These are the if statements that control the length of the password.

  //This is an additional side pool created to pull from if additional characters are needed to add to the password length.
 

  

    function characterExpander() {
      for (growingString; growingString.length <8; growingString+selectedRandomPool){
      };

      for (growingString; growingString.length < userSelectedLength; growingString+selectedRandomPool){
      };
      /*for (growingString.length; growingString.length >128; growingString.length--){
          growingString.push(selectedRandomPool)
      }*/
    }

  characterExpander();
  console.log(growingString);
  console.log(growingString.length);
  return growingString.join(' ');
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

