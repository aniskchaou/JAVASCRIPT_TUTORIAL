//JavaScript Window History
//The window.history object contains the browsers history.


//To protect the privacy of the users, there are limitations 
//to how JavaScript can access this object.

//Some methods:

history.back() //- same as clicking back in the browser
history.forward() //- same as clicking forward in the browser

function goBack() {
  window.history.back()
}

function goForward() {
  window.history.forward()
}