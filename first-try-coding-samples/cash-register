// this algorithm haunts my dreams

function checkCashRegister(price, cash, cid) {
  var register = {status: "OPEN", change: [] };
  const changeAvailable = getChangeAvailable(cid);
  const changeDue = parseFloat((cash - price).toFixed(2));

 	if (changeAvailable < changeDue){ 
		insufficientFunds();
	}else if (changeAvailable === changeDue){ 
		emptyRegister();
	}else {
		getChangeForCustomer(changeDue, cid);
	}	
	
function getChangeAvailable(changeInRegister){
	let totalInDrawer = 0;
	for (let currency of changeInRegister){
		totalInDrawer += currency[1]; // add up second elements in array
	}
		return parseFloat(totalInDrawer.toFixed(2));
}
		
function insufficientFunds(){
	register.status = "INSUFFICIENT_FUNDS";
	register.change = [];
}

function emptyRegister(){
	register.status = "CLOSED";
	register.change = cid;
}

function getChangeForCustomer(changeDue, cid){
		register.status = "OPEN";			
				let money = {
					"PENNY": 0.01,
					"NICKLE": 0.05,
					"DIME": 0.10,
					"QUARTER": 0.25,
					"ONE": 1,
					"FIVE": 5,
					"TEN": 10,
					"TWENTY": 20,
					"ONE HUNDRED": 100
				};
				let change = [];
				for (let i = cid.length - 1; i >= 0; i--){
					let currencyType = cid[i][0];  // String name telling us which coin we are working with
					let currencyAmount = cid[i][1]; // Amount of money we have in current coin's type
					let currencyValue = money[currencyType]; // value of the type of coin chosen
					let numCurrencyTypeReturned = (currencyAmount / currencyValue).toFixed(2); // How many coins of this type do we need
					let currencyToReturn = 0; // how many of current type of currency to return counter

					while (changeDue >= currencyValue && numCurrencyTypeReturned > 0){
						changeDue -= currencyValue;
						changeDue = changeDue.toFixed(2);
						numCurrencyTypeReturned--;
						currencyToReturn++;
					}
					
					// don't return that we have 0 of type $100 etc
					if (currencyToReturn > 0){
						change.push([currencyType, currencyToReturn * currencyValue])
					}
				}
			
				if (changeDue > 0){
					insufficientFunds();
				}else{
					register.change = change;			
				}	
			}	

  //return  "Status: " + register.status + "||| Change : " + register.change; 
  return "change avail: " + changeAvailable + "|type| " + typeof(changeAvailable)
		+ " // changeDue: " + changeDue + "|type| " + typeof(changeDue);
		
 }
 
 checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
