function myReplace(str, before, after) {
	
	return ((before.charAt(0) === before.toUpperCase().charAt(0)) ? 
		 str.replace(before, ((after.charAt(0).toUpperCase()) + after.slice(1))):  // caps at start
		 str.replace(before, after)); // no caps at start
}
