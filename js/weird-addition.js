/* This solution is really ugly and could be fixed but I'm adding it here to remember my thought process
as I tried to come up with solutions to these weird situations.
Better answers are listed below
*/

function addTogether(...theArgs) {

if (theArgs.every((val) => 
	typeof(val) === 'number')){

	let sum = 0; 
	let addTogether2 = function (num){
		if (typeof(num) === 'number'){
				return Number(theArgs) + num;
		}else{ 
		return undefined;
		}
	};
	 
	 
	  if (arguments.length > 1 ){
			sum = theArgs.reduce((acc, val) => {
				return acc + val;
		});
			return sum;
	  }else{
		return addTogether2;
	  }
	   
	  
	}else{ 
		return undefined;
	}
}

/* HERE IS THE MUCH BETTER SOLUTION
 //jshint esversion: 6
    function addTogether() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ? 
            n + args[0]:
            undefined;
    }

    // test here
    addTogether(2,3);

*/
