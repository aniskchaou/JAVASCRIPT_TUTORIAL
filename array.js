//Creating an Array
 var cars = ["Saab", "Volvo", "BMW"]; 
var cars = new Array("Saab", "Volvo", "BMW"); 
var name = cars[0];



var x = cars.length; // The length property returns the number of elements 
var y = cars.sort(); // The sort() method sorts arrays


var fruits, text, fLen, i;
 fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fLen = fruits.length; text = "<ul>"; 
for (i = 0; i < fLen; i++) {
 text += "<li>" + fruits[i] + "</li>"; 
} 
text += "</ul>";


var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
document.getElementById("demo").innerHTML = fruits.toString();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.pop(); // Removes the last element ("Mango") from fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
var x = fruits.pop(); // the value of x is "Mango"

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.push("Kiwi"); // Adds a new element ("Kiwi") to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.shift(); // Removes the first element "Banana" from fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.splice(2, 0, "Lemon", "Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
fruits.splice(0, 1); // Removes the first element of fruits

var myGirls = ["Cecilie", "Lone"]; 
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
 // Concatenates (joins) myGirls and myBoys


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]; 
var citrus = fruits.slice(1);

function myArrayMax(arr) { return Math.max.apply(null, arr); }

function myArrayMin(arr) { return Math.min.apply(null, arr); }

var numbers = [45, 4, 9, 16, 25]; 
var over18 = numbers.filter(myFunction); 
function myFunction(value, index, array) { return value > 18; }
