  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDbodRobr4TnqEAxxYcjqjbvo58bZkAK8Y",
  authDomain: "reservation-site-6a399.firebaseapp.com",
  databaseURL: "https://reservation-site-6a399.firebaseio.com",
  projectId: "reservation-site-6a399",
  storageBucket: "",
  messagingSenderId: "584897084444"
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