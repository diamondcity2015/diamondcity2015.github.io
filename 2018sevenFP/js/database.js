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

//Firebase END

var database = firebase.database();

var reservationData = {};

$('#confirm').click(function() {
reservationData.name = $('#name').val();
reservationData.date = $('#date').val();
});

$('#formone').on('submit', function(event) {
  event.preventDefault();;

  database.ref('#formone').push(reservationData)
});

database.ref('#formone').on('child_added', function(snapshot) {
  var reservationList = $('.reservation-list');
  var reservations = snapshot.val();
  var source   = $("#reservation-template").html();
  var template = Handlebars.compile(source);
  var reservationTemplate = template(reservations);
  reservationList.append(reservationTemplate);
});


//==================================

//$('.reservation-day li').click(function() {
//  reservationData.day = $(this).text();
//});

//$('.reservations').on('submit', function(event) {
///  event.preventDefault();

  
 // reservationData.name = $('.reservation-name').val();

  
//  database.ref('reservations').push(reservationData);
//});


// on initial load and addition of each reservation update the view
//database.ref('reservations').on('child_added', function(snapshot) {
  // grab element to hook to
 // var reservationList = $('.reservation-list');
  // get data from database
  //var reservations = snapshot.val();
  // get your template from your script tag
//  var source   = $("#reservation-template").html();
  // compile template
//  // pass data to template to be evaluated within handlebars
  // as the template is created
 // var reservationTemplate = template(reservations);
  // append created templated
 // reservationList.append(reservationTemplate);
//   });
