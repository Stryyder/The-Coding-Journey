function translatePigLatin(str) {
	var regex = new RegExp("(a|e|i|o|u)");
		
		// has no vowels
		if (!regex.test(str)){
			return str
			+ "ay";
		}
		// starts with vowel
		else if (regex.test(str.charAt(0))){
			return str + "way"; 
		// starts with consonant
		}else{
			return str.substring(str.search(regex)) 
			+ str.substring(0, str.search(regex))
			+ "ay"; 
		}
}


translatePigLatin("fdfzzzfdddf");
