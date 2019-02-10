//Window Navigator
//The window.navigator object can be written without the 
//window prefix.


//Browser Cookies
//The cookieEnabled property returns true if cookies are enabled, 
//otherwise false:


document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;

//Browser Application Name
//The appName property returns the application name of the 
//browser:


document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;


//Browser Application Code Name
//The appCodeName property returns the application code 
//name of the browser:


document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;

//The Browser Engine
//The product property returns the product name of the browser 
//engine:


document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;

//The Browser Version
//The appVersion property returns version information about 
//the browser:


document.getElementById("demo").innerHTML = navigator.appVersion;

//The Browser Agent
//The userAgent property returns the user-agent header 
//sent by the browser to the server:


document.getElementById("demo").innerHTML = navigator.userAgent;

//The Browser Platform
//The platform property returns the browser platform 
//(operating system):


document.getElementById("demo").innerHTML = navigator.platform;

//The Browser Language
//The language property returns the browser's language:


document.getElementById("demo").innerHTML = navigator.language;

//Is The Browser Online?
//The onLine property returns true if the browser is online:

document.getElementById("demo").innerHTML = navigator.onLine;


//Is Java Enabled?
//The javaEnabled() method returns true if Java is enabled:

document.getElementById("demo").innerHTML = navigator.javaEnabled();
