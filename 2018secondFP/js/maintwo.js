var today = new Date();
var hourNow = today.getHours();
var greeting

if (hourNow > 18) {
	greeting = 'Good Evening!';
}  else if (hourNow > 12)   {
	greeting = 'Good Afternoon!';
}  else if (hourNow > 0) {
	greeting = 'Good Morning!';
}  else {
	greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');



//If day is sunday through wednesday , they are open 6:00 am to 1:30 am

//If day is thursday, they are open 4:00 am to midnight

//If day is friday, they are open 24 hours

//If day is saturday, they are open 24 hours to 4:00 am
