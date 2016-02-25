$(document).ready(function() {
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
		FB.init({
			appid: '{your-app-id}',
			version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
	});
	$('#loginbutton,#feedbutton').removeAttr('disabled');
	FB.getLoginStatus(updateStatusCallback);	
});
});