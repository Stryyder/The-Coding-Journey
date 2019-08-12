/* 
First Exposure to Promises - Began experimentation with API calls and how to handle JSON
*/

document.getElementById("gw2ItemNumbers").value = "46";
		  function apiCall(){
			  
			  let itemNumber = document.getElementById("gw2ItemNumbers").value;
			  let requestedPromise = "https://api.guildwars2.com/v2/items/"+ itemNumber;
			  let postsPromise = fetch(requestedPromise);
					postsPromise
						.then(data => data.json())
						.then(data => {
							sendJsonToVar(data["name"]);
						});
				
					function sendJsonToVar(dataToGrab){
					console.log(dataToGrab);
					document.getElementById("gw2ItemName").innerHTML = dataToGrab;
					}
			}
			apiCall();
