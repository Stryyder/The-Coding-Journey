function rot13(str) { 
  let translation = '';
  
  
  for (let i =0; i < str.length; i++){
	  let code = str[i].charCodeAt();
	
      if (code >= 65 && code <= 77){
        translation += String.fromCharCode(code + 13);
       }else if (code > 77 && code <= 90){
         translation += String.fromCharCode(code - 13);
       }else {
         translation += str[i];
       }
   }
 
  
  return translation; // ~ String.fromCharCode(65);
}

rot13("SERR CVMMN!");
