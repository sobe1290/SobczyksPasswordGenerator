// Assignment code here

const specialCharacters = [" ", "!" ,"#" ,"$" ,"%" ,"&" ,"'" ,"(" ,")" ,"*" ,"+" , "-",".", "/", ":",";", "<", "=", ">", "?", "@" ,"[", "]", "^", "_", "`", "{" ,"|" ,"}" ,"~"];
const lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//console.log(specialCharacters.length);
//console.log(lowerCaseAlphabet.length);
//console.log(upperCaseAlphabet.length);
//console.log(numbers.length);

const randomSpecialCharacter = Math.floor(Math.random() * specialCharacters.length);
const randomLowerCaseAlphabet = Math.floor(Math.random() * lowerCaseAlphabet.length);
const randomUpperCaseAlphabet = Math.floor(Math.random() * upperCaseAlphabet.length);
const randomNumbers = Math.floor(Math.random() * numbers.length);

//console.log(specialCharacters[randomSpecialCharacter]);
//console.log(lowerCaseAlphabet[randomLowerCaseAlphabet]);
//console.log(upperCaseAlphabet[randomUpperCaseAlphabet]);
//console.log(numbers[randomNumbers]);


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


const growingString = []


//function randomCombiner() {
  //console.log(`${specialCharacters[randomSpecialCharacter]}${lowerCaseAlphabet[randomLowerCaseAlphabet]}${upperCaseAlphabet[randomUpperCaseAlphabet]}${numbers[randomNumbers]}`)
//}

randomCombiner()

//const scrambledRandomCombined = 



// Get references to the #generate element
var selectedCharacters = document.querySelector("#specialCharacter");
var selectedNumbers = document.querySelector("#numbers");
var selectedLower = document.querySelector("#lowerCase");
var selectedUpper = document.querySelector("#upperCase");
var userSelectedLength = document.querySelector("#length")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
