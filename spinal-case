// Spinal Case text
// a solution that feels wrong

function spinalCase(str) {

var r = /(\s|_)/g;
var s = /(?=[A-Z])/;
var r2 = /\s/g;
var r3 = /--/g;

return str.replace(r,"-").split(s).join("-").replace(r3, "-").toLowerCase();
 
}

spinalCase('This Is Spinal Tap');

/* Much Better
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
*/
