var name = $('#item').val();

$('input').on('focus', function () {

  $('p').html('input is in focus!');
});


$('input').on('blur', function () {
  $('p').html('input is no longer in focus.');
});

$('button').on('submit', function (event) {
	event.preventDefault();
	if (name === "")    {
		$('p').html('Please enter a name.');
	}
    
});

$('#formone').on('click', function (event) {
	event.preventDefault();
	if (name == "")    {
		$('p').html('Please enter a name.');
	}
});


