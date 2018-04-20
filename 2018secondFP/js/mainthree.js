//var today = new Date();
//var hourNow = today.getHours();
//var greeting

//if (hourNow > 18) {
//	greeting = 'Good Evening!';
//}  else if (hourNow > 12)   {
//	greeting = 'Good Afternoon!';
//}  else if (hourNow > 0) {
//	greeting = 'Good Morning!';
//	greeting = 'Welcome';
//
//document.write('<h3>' + greeting + '</h3>');

var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

var m = moment().tz("America/New_York");  // US Eastern Time Zone

var day = new Date();
var currentMonth = day.getUTCMonth();
var currentDay = day.getUTCDay();
var currentHours = day.getUTCHours();
var currentMinutes = day.getUTCMinutes();
var currentSeconds = day.getUTCSeconds();
var offSet = day.getTimezoneOffset() / 60;


var dateNow = day.getDay();

var message 

  if (day == friday || saturday) {
  	message = 'We are open';
  }

  else {
  	message = 'Weare closed';
  }

document.write('<h3>' + message + '</h3>');
//If day is sunday through wednesday , they are open 6:00 am to 1:30 am

//If day is thursday, they are open 4:00 am to midnight

//If day is friday, they are open 24 hours

//If day is saturday, they are open 24 hours to 4:00 am
