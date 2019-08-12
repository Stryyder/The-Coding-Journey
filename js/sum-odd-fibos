function sumFibs(num) {
// 1,1,2,3,5,8,13
let a = 0, b = 1, c = 1;
let arr = [];
	for (let i = 1; i <= num; i++){ 
		
			if (num % 2 > 0){ // adjust for odd/even counts in iteration
				i = c; 
			}
		c = a + b; // 3rd number = previous + one before previous
		a = b; // 1st number becomes one before previous
		b = c; // 2nd number becomes previous
			if (num % 2 == 0){
				i = c; 
			}
		
		if (a % 2 > 0){ // if it's an odd number, push it to the array
			arr.push(a);
		
		}
	}
return arr.reduce((x,y) => x + y); // add up all the elements of the array
}

sumFibs(4);
