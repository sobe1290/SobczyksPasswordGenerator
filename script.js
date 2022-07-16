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
//console.log(specialCharacters[randomSpecialCharacter]);

const randomLowerCaseAlphabet = Math.floor(Math.random() * lowerCaseAlphabet.length);
//console.log(lowerCaseAlphabet[randomLowerCaseAlphabet]);

const randomUpperCaseAlphabet = Math.floor(Math.random() * upperCaseAlphabet.length);
//console.log(upperCaseAlphabet[randomUpperCaseAlphabet]);

const randomNumbers = Math.floor(Math.random() * numbers.length);
//console.log(numbers[randomNumbers]);

function randomCombiner() {
  console.log(`${specialCharacters[randomSpecialCharacter]}${lowerCaseAlphabet[randomLowerCaseAlphabet]}${upperCaseAlphabet[randomUpperCaseAlphabet]}${numbers[randomNumbers]}`)
}

randomCombiner()

//const scrambledRandomCombined = 



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
