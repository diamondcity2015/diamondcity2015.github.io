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

$(document).on("click","#datepickerinputtag",function(){
    var viewportwidth = $(window).width();
    var datepickerwidth = $("#ui-datepicker-div").width();
    var leftpos = (viewportwidth - datepickerwidth)/2; //Standard centering method
    $("#ui-datepicker-div").css({left: leftpos,position:'absolute'});
});