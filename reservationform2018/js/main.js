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

reservationData = {};

//step 3

$('.reservation-day li').on ('click', function (e)  {
  reservationData.day = $(this).text();
});

//step 4 , 5

$('.reservation-form').on ('submit', function(event)  {
	event.preventDefault();
	reservationData.name = $('.reservation-name').val();
	
    var reservationsReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});

//step 6

// retrieve reservations data when page loads and when reservations are added
function getReservations() {

  // use reference to database to listen for changes in reservations data
  database.ref('reservations').on('value', function(results) {

      // Get all reservations stored in the results we received back from Firebase
      var allReservations = results.val();

      // remove all list reservations from DOM before appending list reservations
      $('.reservations').empty();
    
//step 7
    
      // iterate (loop) through all reservations coming from database call
    for (var reservation in allReservations) {
    // Create an object literal with the data we'll pass to Handlebars
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };

       var source = $("#reservation-template").html();

  var template = Handlebars.compile(source);

  var reservationListItem = template(context);

  $('.reservations').append(reservationListItem);

    }  

  });
}

// When page loads, get reservations
getReservations();



