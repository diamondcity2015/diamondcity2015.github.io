var reservationData = {};

 

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDntJLbJeoZ5aNSige8rmk4jQy0mk8AToI",
    authDomain: "reservation-site-f1a2c.firebaseapp.com",
    databaseURL: "https://reservation-site-f1a2c.firebaseio.com",
    projectId: "reservation-site-f1a2c",
    storageBucket: "",
    messagingSenderId: "403481000357"
};



firebase.initializeApp(config);

var database = firebase.database();

// set the day when an option is clicked on
$('.reservation-day li').click(function() {
  reservationData.day = $(this).text();
});

// when clicked, the name data should be set
// and all data should be sent to your database
$('.reservations').on('submit', function(event) {
  // prevent reloading
  event.preventDefault();

  // get name from input
  reservationData.name = $('.reservation-name').val();

  // push configured data object to database
  database.ref('reservations').push(reservationData);
});


// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(snapshot) {
  // grab element to hook to
  var reservationList = $('.reservation-list');
  // get data from database
  var reservations = snapshot.val();
  // get your template from your script tag
  var source   = $("#reservation-template").html();
  // compile template
  var template = Handlebars.compile(source);
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);
  // append created templated
  reservationList.append(reservationTemplate);
});

function required()
   {
var empt = document.forms["empty"].value;
if (empt == "")
 {
alert("Please enter a name");
return false;
  }
 else 
 {
alert('Reservation Accepted');
return true; 
   }
   }

