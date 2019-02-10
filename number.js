var x = 123; 
var y = new Number(123); // typeof x returns number 
// typeof y returns object 

var x = 500; 
var y = new Number(500); // (x == y) is true because x and y have equal values 

var x = new Number(500); 
var y = new Number(500); // (x == y) is false because objects cannot be compared


toString() var x = 123; 
x.toString(); // returns 123 from variable x 
(123).toString(); // returns 123 from literal 123 
(100 + 23).toString(); // returns 123 from expression 100 + 23 toExponential() 
var x = 9.656; x.toExponential(2); // returns 9.66e+0 x.toExponential(4); // returns 9.6560e+0 
x.toExponential(6); // returns 9.656000e+0