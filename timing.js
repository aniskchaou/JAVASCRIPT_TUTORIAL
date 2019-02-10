//The window.setTimeout() method can be written without the window prefix.
//The first parameter is a function to be executed.
//The second parameter indicates the number of milliseconds before execution.

<button onclick="setTimeout(myFunction, 3000)">Try it</button>

function myFunction() {
  alert('Hello');
}

//The clearTimeout() method stops the execution of the function specified in setTimeout().
myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);

//The setInterval() method repeats a given function at every given time-interval.
//The window.setInterval() method can be written without the window prefix.
//The first parameter is the function to be executed.
//The second parameter indicates the length of the time-interval between each execution.

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//The clearInterval() method stops the executions of the function specified in the setInterval() method.
