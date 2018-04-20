//$(document).ready(function() {
   //     var now = new Date();
    //    var hours = now.getHours();
    //    var msg;

     //   if (hours < 12) msg = "Good Morning!";
     //   else if (hours < 18) msg = "Good Afternoon!";
     //   else msg = "Good Evening!";
    //$('#time').html('<p>'+msg+'</p>');
    //});



var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

var today = new Date();
var hours = today.getHours();

var greeting = function ()  {

// if day is sunday
if (days === 0  && hours < 4) {
	console.log('Open');
}

else if (days === 0  && hours > 4 && hours < 6) {
	console.log('Closed');
}

else if (days === 0  && hours > 6) {
	console.log('Open');
}


//if day is monday

else if (days === 1 && hours < 1:31)  {
	console.log('Open');
}

else if (days === 1 && hours > 1:30 && hours < 6)  {
	console.log('Closed');
}

else if (days === 1 && hours > 6)  {
	console.log('Open');
}

//if day is tuesday

else if (days === 2 && hours < 1:31)  {
	console.log('Open');
}

else if (days === 2 && hours > 1:30 && hours < 6)  {
	console.log('Closed');
}

else if (days === 2 && hours > 6)  {
	console.log('Open');
}

//if day is wednesday

else if (days === 3 && hours < 1:31)  {
	console.log('Open');
}

else if (days ===3 && hours > 1:30 && hours < 6)  {
	console.log('Closed');
}

else if (days === 3 && hours > 6)  {
	console.log('Open');
}

//if day is thursday

else if (days === 4 && hours < 1:31)  {
	console.log('Open');
}

else if (days ===4 && hours > 1:30 && hours < )  {
	console.log('Closed');
}

else if (days === 4 && hours > 4)  {
	console.log('Open');
}

//if day is friday
else if (days === 5)   {
	//greeting = 'Open';
	console.log('Open');
   }
//if day is saturday
else if (days === 6)   {
	console.log('Open');
	}

document.write('<h3>' + greeting + '</h3>');

}

greeting();








//var today = new Date();
//var hourNow = today.getHours();
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

