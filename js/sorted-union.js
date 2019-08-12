// join an unknown number of arguments into one array preserving order and removing dupes

function uniteUnique(...args) { // arrays joined by REST operator in function call
	
	let newArr = []; // ["o", ...args]; would list all arguments in one array
	
	for (let arg of args){
		for (let i of arg){
			if (newArr.indexOf(i) === -1){
				newArr.push(i);
			}
		}
	}

return newArr;
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
