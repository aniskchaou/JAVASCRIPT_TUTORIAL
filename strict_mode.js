//The purpose of "use strict" is to indicate 
//that the code should be executed in "strict mode".
//With strict mode, you can not, for example, 
//use undeclared variables.

//Strict mode is declared by adding "use strict"; to the beginning of a 
//script or a function.
//Declared at the beginning of a script,
//it has global scope (all code in the script 
//will execute in strict mode):


"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}