//valueOf() 

var x = 123; 
x.valueOf(); // returns 123 from variable x 
(123).valueOf(); // returns 123 from literal 123 
(100 + 23).valueOf(); // returns 123 from expression 100 + 23

//Number() 
Number(true); // returns 1 
Number(false); // returns 0 
Number("10"); // returns 10 
Number(" 10"); // returns 10 
Number("10 "); // returns 10 
Number(" 10 "); // returns 10 
Number("10.33"); // returns 10.33 
Number("10,33"); // returns NaN 
Number("10 33"); // returns NaN 
Number("John"); // returns NaN

//parseInt()
parseInt("10"); // returns 10 
parseInt("10.33"); // returns 10 
parseInt("10 20 30"); // returns 10 
parseInt("10 years"); // returns 10 
parseInt("years 10"); // returns NaN

//parseFloat() 
parseFloat("10"); // returns 10 
parseFloat("10.33"); // returns 10.33 
parseFloat("10 20 30"); // returns 10
parseFloat("10 years"); // returns 10 
parseFloat("years 10"); // returns NaN