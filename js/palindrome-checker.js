function palindrome(str) {
	let regEx = /[a-z | 0-9]/g;
	let cleanedString = str.toLowerCase().replace(/\s/g, '').match(regEx).join('');
	let reversedString = cleanedString.split("").reverse().join('');
//return cleanedString + " reverses to-> " + reversedString;
 return ((cleanedString === reversedString) ? true : false);

}

/*
While my solution works, it's a little ugly and would perform badly on huge strings.
Below is a better solution. Courtesy of freeCodeCamp #cyclomaticComplexity

   //this solution performs at minimum 7x better, at maximum infinitely better.
    //read the explanation for the reason why. I just failed this in an interview.
    function palindrome(str) {
      //assign a front and a back pointer
      let front = 0
      let back = str.length - 1

      //back and front pointers won't always meet in the middle, so use (back > front)
      while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
      }

      //if the whole string has been compared without returning false, it's a palindrome!
      return true

    }



*/
