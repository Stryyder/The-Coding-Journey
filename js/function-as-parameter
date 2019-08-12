function dropElements(arr, func) {
	// always arr[0] because of arr.shift ~ arr.length test accounts for when no values are true
  while (arr.length > 0 && (!func(arr[0]))){ 
		arr.shift();
	}
return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
