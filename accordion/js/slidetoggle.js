$(document) .ready(function()   {
	$("h4").hide();

	$("h3").click(function()  {
		$("h4").slideToggle(1000);
	});
});