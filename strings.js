//length
var ch="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(ch.length)

//locate
var str = "Please locate where 'locate' occurs!"; 
var pos = str.search("locate");

console.log(pos);

//indexOf 
var str = "Please locate where 'locate' occurs!"; 
var pos = str.indexOf("locate"); 

//lastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
// 21

//Both indexOf(), and lastIndexOf() return -1 if the text is not found 
var str = "Please locate where 'locate' occurs!"; 
var pos = str.lastIndexOf("John"); 
//-1


//Both methods accept a second parameter as the starting 
var str = "Please locate where 'locate' occurs!"; 
var pos = str.indexOf("locate",15); 

//search() 
var str = "Please locate where 'locate' occurs!";
 var pos = str.search("locate");

//slice() 
var str = "Apple, Banana, Kiwi"; 
var res = str.slice(7, 13); 
// Banana 

var str = "Apple, Banana, Kiwi"; 
var res = str.slice(-12, -6);
//Banana

var res = str.slice(7); 
var res = str.slice(-12); 
// Banana, Kiwi


//substring 
var str = "Apple, Banana, Kiwi"; 
var res = str.substring(7, 13); 
//--> Banana


//substr
var str = "Apple, Banana, Kiwi"; 
var res = str.substr(7, 6); 
//-->Banana

var str = "Apple, Banana, Kiwi"; 
var res = str.substr(7);


//replace 
str = "Please visit Microsoft!"; 
var n = str.replace("Microsoft", "W3Schools");

//toUpperCase 
var text1 = "Hello World!"; 
var text2 = text1.toUpperCase(); 

//concat
var text = "Hello" + " " + "World!"; 
var text = "Hello".concat(" ", "World!");

//trim
 var str = " Hello World! "; 
str.trim();

//charAt
 var str = "HELLO WORLD"; 
 str.charAt(0); // returns H

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
text += arr[i] + "<br>"
}