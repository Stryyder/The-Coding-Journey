function pairElement(str) {
// AT/TA, GC/CG

// if it's A, yield [A, T]
// if it's T, yield [T, A]
// if it's G, yield [G, C]
// if it's C, yield [C, G]

var arr = str.split("");
var newArr = [];

for (let i = 0; i < arr.length; i++){
	switch(arr[i]) {
	
		case "A":
			newArr.push(["A", "T"])
		break;
		
		case "T":
			newArr.push(["T", "A"])
		break;
		
		case "G":
			newArr.push(["G", "C"])
		break;
		
		case "C":
			newArr.push(["C", "G"])
		break;
	}

}

  return newArr;
}


pairElement("GCG");
