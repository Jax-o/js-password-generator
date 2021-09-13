// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
	var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var special = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];
	var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	
	function generatePassword() {
		alert('Please choose password criteria: must include at least 1 selection: an uppercase, a lowercase, a number, or a special character');
		var passlength = window.prompt('Choose length of password, mininmum 8 characters and max 128 characters');
		var passmin = 8;
		var passmax = 128;
	
		if (passlength >= passmin && passlength <= passmax) {
			window.alert('Valid');
		} else {
			window.alert('Invalid choose between 8 and 128');
		}

		var lowercase = window.confirm('Would you like to choose a lowercase');
		
		if (lowercase === true) {
			window.alert('We will choose a lowercase letter')

		} else {
			window.alert('Choose another criteria');
		}

		var uppercase = window.confirm('Would you like to choose an uppercase');

		if (uppercase === true) {
			window.alert('We will choose an uppercase letter')

		} else {
			window.alert('Choose another criteria, if you have not done so already');
		}
		
		var num = window.confirm('Would you like to choose a numeric character');

		if (num === true) {
			window.alert('We will choose a numeric character')

		} else {
			window.alert('Choose another criteria if you have not done so already');
		}
		
		var special = window.confirm('If you have not already chosen a password criteria please choose a special character');

		if (special === true) {
			window.alert('We will choose a special letter')

		} else {
			window.alert('Invalid');
		}


	

	var low = Math.floor(Math.random() * lowercase.length);
	var firstchoice = lowercase[low];
	window.alert(firstchoice)
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
