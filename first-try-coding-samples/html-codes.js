/* After trying most of the rudimentary ways of doing it, I stumbled on this method which is clean and neat
 It's worth noting, though, that with the way I was testing my code, this solution did not work 
 because my innerHTML test page console mockup was reconverting the character back to & instead of &amp;
*/
function convertHTML(str) {
 
  var htmlCodes = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "\"" : "&quot;",
    "\'" : "&apos;"
  };
  
  
 return str.replace(/&|<|>|"|'/gi, function(i) {
    return htmlCodes[i];
  });
     
}

convertHTML("Dolce & Gabbana");