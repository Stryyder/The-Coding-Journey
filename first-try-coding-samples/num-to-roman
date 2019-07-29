function convertToRoman(num) {
 
 var romanNumerals = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1
 }
  var roman = ""; //~ output string
 
	for (var key in romanNumerals){ // ~ Loop through keys til we are close to num
		while (num >= romanNumerals[key]){  // ~ only run this if we're finally near the right key
			roman += key; // ~ concatenate onto our output string
			num -= romanNumerals[key]; // ~ rinse and repeat
		}
	}

return roman;
}

convertToRoman(36);
