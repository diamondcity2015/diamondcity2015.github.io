$(document).ready(function() {
        var now = new Date();
        var hours = now.getHours();
        var msg;

        if (hours < 12) msg = "Good Morning!";
        else if (hours < 18) msg = "Good Afternoon!";
        else msg = "Good Evening!";
    $('#time').html('<p>'+msg+'</p>');
    });

//var today = new Date();
//var greeting

//if (hourNow > 18) {
//	greeting = 'Good Evening!';
//}  else if (hourNow > 12)   {
//	greeting = 'Good Afternoon!';
//}  else if (hourNow > 0) {
//	greeting = 'Good Morning!';
//}  else {
//	greeting = 'Welcome';
//}

//document.write('<h3>' + greeting + '</h3>');

