//JavaScript Objects 
var person = {
	firstName:"John", 
	lastName:"Doe", 
	age:50, 
	eyeColor:"blue"
};

var person = { 
	firstName: "John",
	 lastName : "Doe",
	  id : 5566,
	   fullName : function() {
	    return this.firstName + " " + this.lastName; 
	} 
}; 

name = person.fullName();