//initialize fireabse

var config = {
    apiKey: "AIzaSyBgXhwKPVhoN4g9FWKTaXf1Id2WbUEY2ng",
    authDomain: "monkcafe-af7d1.firebaseapp.com",
    databaseURL: "https://monkcafe-af7d1.firebaseio.com",
    projectId: "monkcafe-af7d1",
    storageBucket: "",
    messagingSenderId: "185790520525"
  };
  firebase.initializeApp(config);

  //connect to database

  var database = firebase.database();

  //rest of js code

  var reservationData ={}

  $(‘reservation-day li’).on('click', function () {
  	reservationData.name = $('#name').val();
	reservationData.date = $('#date').val();
	});

  	

  $('reservation-day name').on('submit', function (event){
  	event.preventDefault();
  	var name = reservationData.val();
  });

  function = getReservations ();
  database.ref('').push(reservationData);

//class code

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




  	
