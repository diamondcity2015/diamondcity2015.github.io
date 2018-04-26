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

  $(‘.reservation-day li’).on('click', function () {
  	reservationData.name = $('#name').val();
	reservationData.date = $('#date').val();
	});

  	

  $('reservation-day name').on('submit', function (event){
  	event.preventDefault();
  	var name = reservationData.val();
  });

  function = getReservations ();
  database.ref('').push(reservationData);




  	
