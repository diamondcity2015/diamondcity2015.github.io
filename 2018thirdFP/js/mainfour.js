// Step 5: When the element with the id #dropdownButton is clicked,
	// a) slide toggle #menu (look up the slideToggle method if you need a refresher)
$('#dropdownButton').on('click', function()  {
	$('#menu').slideToggle(500);
});