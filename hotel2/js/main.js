$(document).ready(function()    {
	$("#birthday").datepicker({
		changeMonth: true,
		changeYear: true,
		dateFormat: "MM dd, yy",
		numberOfMonths: 1,
		maxDate: 365,
		minDate: -3650
	});
});