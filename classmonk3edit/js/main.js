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

$('#resSubmit').click(function() {
reservationData.name = $('#name').val();
reservationData.date = $('#date').val();
});

$('#formGR_1').on('submit', function(event) {
  event.preventDefault();;

  database.ref('formGR_1').push(reservationData)
});

database.ref('formGR_1').on('child_added', function(snapshot) {
  var reservationList = $('.reservation_list');
  var reservations = snapshot.val();
  var source   = $("#reservation-template").html();
  var template = Handlebars.compile(source);
  var reservationTemplate = template(reservations);
  reservationList.append(reservationTemplate);
});