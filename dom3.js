document.getElementById('button').addEventListener('click',createH1);

function createH1 (argument) {
var container=document.getElementById('container');
var h1=document.createElement("h1");
var text=document.createTextNode("hello world !");
h1.appendChild(text);
container.appendChild(h1);
	
}