function orbitalPeriod(arr) {
  // turn second piece of object into orbital period in seconds
  let result = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // T = 2PI * SQRT((Radius + Altitude) CUBED / GM)
  arr.forEach((obj) => {
	let conversion = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
		delete obj.avgAlt;
		obj.orbitalPeriod = conversion;
  });	

return arr;
}
