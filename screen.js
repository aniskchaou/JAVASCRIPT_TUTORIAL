//JavaScript Window Screen
//The window.screen object contains information about
// the user's screen.

//Window Screen Width
//The screen.width property returns the width of the visitor's
// screen in pixels.


document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;

//Window Screen Height
//The screen.height property returns the height of 
//the visitor's screen in pixels.


document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;

 
//Window Screen Available Width
//The screen.availWidth property returns the width 
//of the visitor's screen, in pixels, minus interface features 
//like the Windows Taskbar.


document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;

//Window Screen Available Height
//The screen.availHeight property returns the height 
//of the visitor's screen, in pixels, minus interface 
//features like the Windows Taskbar.


document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
