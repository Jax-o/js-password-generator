// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}
// create arrays with declared variables for password criteria
var alphalowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var ALPHAUPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];
var possibleNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function generatePassword() {
	// create an empty array, to concat chosen password criteria, create empty string for actual password, declare variable for password length
	var passwordPossibleChar = []
	var passwordString = ''
	window.alert('Please choose password criteria: must include at least 1 selection: an uppercase, a lowercase, a number, or a special character');
	var passLength = window.prompt('Choose length of password, mininmum 8 characters and max 128 characters');
	var passMin = 8;
	var passMax = 128;

	// create conditional statements and Booleans
	if (passLength >= passMin && passLength <= passMax) {
		window.alert('Valid');
	} else {
		window.alert('Invalid choose between 8 and 128');
	}

	var lowercase = window.confirm('Would you like to choose a lowercase');

	if (lowercase === true) {
		window.alert('We will choose lowercase characters');
		passwordPossibleChar = passwordPossibleChar.concat(alphalowercase)

	} else {
		window.alert('Choose another criteria');
	}

	var uppercase = window.confirm('Would you like to choose an uppercase');

	if (uppercase === true) {
		window.alert('We will choose uppercase characters')
		passwordPossibleChar = passwordPossibleChar.concat(ALPHAUPPERCASE)
	} else {
		window.alert('Choose another criteria, if you have not done so already');
	}

	var num = window.confirm('Would you like to choose a numeric character');

	if (num === true) {
		window.alert('We will choose numeric characters')
		passwordPossibleChar = passwordPossibleChar.concat(possibleNum)
	} else {
		window.alert('Choose another criteria if you have not done so already');
	}

	var special = window.confirm('If you have not already chosen a password criteria please choose a special character');

	if (special === true) {
		window.alert('We will choose special characters')
		passwordPossibleChar = passwordPossibleChar.concat(specialChar)
	} else {
		window.alert('Choose another criteria if you have not done so already');
	}
	console.log(passwordPossibleChar)

	// for loop and math property to create password based on selected criteria
	for(var i=0; i < passLength; i++) {
		passwordString += passwordPossibleChar[Math.floor(Math.random() * passwordPossibleChar.length)];
	}
	return passwordString;

} 


writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
