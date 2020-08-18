function isItPrime(testNum){
		if (testNum===2){ // 2 is a special case, so return as prime immediately
			return true;
		}
		
		if (testNum < 2 || !(testNum % 2)){
			return false;
		}
		
	for(let j = 3; j <= testNum - 1; j++) {
		if(testNum % j === 0) {
			return false;
		}	
			
	}	
return true;
}


function sumPrimes(num) {
let primes = [];
	for (let i = 0; i <= num; i++){		
		if (isItPrime(i)){
			primes.push(i);
		}
	}
		
return primes.reduce((x,y) => x + y);
	
}

sumPrimes(10);
