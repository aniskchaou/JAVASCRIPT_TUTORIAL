//Date 

Date var d = new Date(); 
var d = new Date(2018, 11, 24, 10, 33, 30); 
var d = new Date("October 13, 2014 11:13:00"); 
var d = new Date(0); var d = new Date(86400000); 
d = new Date(); var d = new Date("2015-03"); 
var d = new Date("2015-03-25");

getFullYear() //Get the year as a four digit number (yyyy)
getMonth() //Get the month as a number (0-11)
getDate() //Get the day as a number (1-31)
getHours() //Get the hour (0-23)
getMinutes() //Get the minute (0-59)
getSeconds() //Get the second (0-59)
getMilliseconds() //Get the millisecond (0-999)
getTime() //Get the time (milliseconds since January 1, 1970)
getDay() //Get the weekday as a number (0-6)
Date.now() //Get the time. ECMAScript 5.