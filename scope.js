//Local JavaScript Variables

//Local variables have Function scope: 
//They can only be accessed from within the function.

function fonction () {
	var local_variable=0;
}
//Local variables are created when a function starts, 
//and deleted when the function is completed.

//Global JavaScript Variables

var global_variables=0;
function fonction (argument) {
	// body...
}

//Automatically Global
//If you assign a value to a variable that has not been declared,
// it will automatically become a GLOBAL variable.
function fonction (argument) {
	local_variable=0
}

//In a web browser, global variables are deleted when you close the browser window (or tab), but remain 
//available to new pages loaded into the same window.