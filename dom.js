document.getElementById('button').addEventListener('click',clicked);

function clicked () {
	console.log("clicked");
}

document.getElementById('button').onclick=function clicked (argument) {
	console.log("clicked 2");
}