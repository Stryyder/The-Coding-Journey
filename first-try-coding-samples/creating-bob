var Person = function(firstAndLast) {
	var fullName = firstAndLast; // set a temp var to use inside this thing

  this.setFirstName = function (name) { // accept a name and then 
   fullName = name + " " + fullName.split(" ")[1]; // ~ resets full name to adjust
  }

  this.setLastName = function (name) { // accept a name and then
    fullName = fullName.split(" ")[0] + " " + name; // ~ resets full name to adjust
  }

  this.setFullName = function(name){
	fullName = name;                   // ~ sets fullName to the provided name (no error checking)
}
  this.getFirstName = function() {
		return fullName.split(" ")[0]; // ~ two element array, 1st chunk
	}	

  this.getLastName = function() {
		return fullName.split(" ")[1]; // ~ two element array, 2nd chunk
	}	

  this.getFullName = function() { // return whatever is in our fullName var
    return fullName;
  }

  
};

var bob = new Person('Bob Ross');
bob.getFullName();
