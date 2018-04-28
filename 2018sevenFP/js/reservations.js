$('input').on('focus', function () {

  $('p').html('input is in focus!');
});


$('input').on('blur', function () {
  $('p').html('input is no longer in focus.');
});

$('button').on('submit', function (event) {
	event.preventDefault();
	if (input === [])
  $('p').html('Please enter a name.');
});

$('button').on('click', function (event) {
	event.preventDefault();
	
});

