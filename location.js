//JavaScript Window Location
//The window.location object can be used to get the 
//current page address (URL) and to redirect the browser 
//to a new page.



//window.location.href returns the href (URL) of the current page
//window.location.hostname returns the domain name of the 
//web host
//window.location.pathname returns the path and filename 
//of the current page
//window.location.protocol returns the web protocol 
//used (http: or https:)
//window.location.assign loads a new document

//Window Location Href
//The window.location.href property returns the URL of 
//the current page.


document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;

//Window Location Hostname
//The window.location.hostname property returns the name 
//of the internet host (of the current page).

document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;

//Window Location Pathname
//The window.location.pathname property returns the pathname 
//of the current page.

document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;

//Window Location Protocol
//The window.location.protocol property returns the web 
//protocol of the page.


document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;

//Window Location Port
//The window.location.port property returns the number of 
//the internet host port (of the current page).


document.getElementById("demo").innerHTML =
"Port number is " + window.location.port;


//Window Location Assign
//The window.location.assign() method loads a new document.

function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
