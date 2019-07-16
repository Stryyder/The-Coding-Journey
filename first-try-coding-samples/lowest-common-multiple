function smallestCommons(arr) {
 let smallNum = Math.min.apply(null, arr); // find smallest number
 let bigNum = Math.max.apply(null, arr); // find largest number
 let rangeOfValues = []; // all the numbers in the range from smallNum to bigNum
 
 
	for (let i = smallNum; i <= bigNum; i++){ // extrapolate range of values from given array
		rangeOfValues.push(i);	
	}			
		function multipleCheck(a, b){ // ~ a = 1, b = 2
			let testNum = a;
			let c = testNum % b; // ~ 1 % 2 = 1
				while (c != 0){ // ~ while there is no remainder
					testNum += a; // ~ a + a or 1 + 1 = 2
					c = testNum % b; // ~ c = 2 % 2 or 0 ; ends loop
				}
			return testNum; // ~ return the value that satisfied the no remainder test
		
		}
	
	const answer = rangeOfValues.reduce((multiple, num) => { // ~ test every value in the range, stopping at bigNum
	return multipleCheck(multiple, num)}, bigNum);

  
  return answer;
}
