// These are the references to the html selectors for password length
/*var selectedCharacters = document.querySelector("#specialCharacter");
var selectedNumbers = document.querySelector("#numbers");
var selectedLower = document.querySelector("#lowerCase");
var selectedUpper = document.querySelector("#upperCase");
var userSelectedLength = document.querySelector("#length");*/
var generateBtn = document.querySelector("#generate");

//This section defines the base strings of all available characters.
var specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//This section takes one character at random from the selected string.
var randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);
var randomLowerCaseAlphabet = Math.floor(Math.random() * lowerCaseAlphabet.length);
var randomUpperCaseAlphabet = Math.floor(Math.random() * upperCaseAlphabet.length);
var randomNumbers = Math.floor(Math.random() * numbers.length);

console.log(randomSpecialCharacter)

selectedCharacters = true;
selectedNumber = true;
selectedLower= true;
selectedCharacters= true;
userSelectedLength = 12;

//This section has the if statements that if an item is selected on the form, then a random character from that string will be added to growingString
var growingString = []

if (selectedCharacters = true) {
  selectedCharacters = randomSpecialCharacter;
  growingString.push(randomSpecialCharacter);
}
if (selectedNumbers = true) {
  selectedNumbers = randomNumbers;
  growingString.push(randomNumbers);
}
if (selectedLower = true) {
  selectedLower = randomLowerCaseAlphabet;
  growingString.push(randomLowerCaseAlphabet);
}
if (selectedUpper = true) {
  selectedUpper = randomUpperCaseAlphabet;
  growingString.push(randomUpperCaseAlphabet);
}



//These are the if statements that control the length of the password.

for (growingString.length; growingString.length <8; growingString.length++){
  growingString.push(selectedRandomPool)
}
for (growingString.length; growingString.length < userSelectedLength; growingString.length++){
    growingString.push(selectedRandomPool)
}
/*for (growingString.length; growingString.length >128; growingString.length--){
    growingString.push(selectedRandomPool)
}*/

//This is an additional side pool created to pull from if additional characters are needed to add to the password length.

var selectedRandomPool = Math.floor(Math.random()*growingString.length);

console.log (selectedRandomPool) // this was just put here to test in console

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  console.log(growingString)
    passwordText.value = growingString;

}

writePassword()  //this was just put here to test in console

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

