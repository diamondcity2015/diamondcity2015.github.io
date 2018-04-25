var reservationData = {};


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOu_d8Uo37Pt0RSa_ZHHVqi0rI-v1BfCA",
    authDomain: "appendreservationexample.firebaseapp.com",
    databaseURL: "https://appendreservationexample.firebaseio.com",
    
    storageBucket: "appendreservationexample.appspot.com",
    
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
