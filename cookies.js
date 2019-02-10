//Create a Cookie with JavaScript
//JavaScript can create, read, and delete 
//cookies with the document.cookie property.


document.cookie = "username=John Doe";
//You can also add an expiry date (in UTC time).
//By default, the cookie is deleted when the browser is closed:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
//With a path parameter, you can tell the browser what path
//the cookie belongs to. By default, the cookie belongs to 
//the current page.

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

//Read a Cookie with JavaScript
//With JavaScript, cookies can be read like this:

var x = document.cookie;