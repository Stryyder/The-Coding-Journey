// I did not come up with these solutions - just went through them and commented trying to make sense of them

function steamrollArray(arr) { 
	// ~ function accepts an array
  
	let newArr = [].concat(...arr); 
	// ~ make a copy of the array using spread operator

  return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr; 
	// ~ Are any arguments arrays ? recursive : all done
}


/*

function steamrollArray(arr) { // ~ function that accepts an array
  var flattenedArray = []; // ~ newArray to push to

  var flatten = function(arg) { // ~ function that flattens
    if (!Array.isArray(arg)) { // ~ if it's NOT an array then
      flattenedArray.push(arg); // ~ send w/e it is to the new array we made
    } else {                   // ~ otherwise
      for (var a in arg) {     // ~ for everything in the array 
        flatten(arg[a]);      // ~ recursively run the flatten function again
      }
    }
  };

  arr.forEach(flatten);      // ~ call the function on everything in submitted arr
  return flattenedArray;     // ~ return our new array
} 
*/
