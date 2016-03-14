<script>
$(document).ready(function() {
  $('#open').click(function(evt) {
  	 evt.preventDefault();
  	 if ($('#login form').is(':hidden')) {
  		$('#login form').fadeIn(300);
	 	$(this).addClass('close'); 
  	} else {
  		$('#login form').slideUp(600);
	 	$(this).removeClass('close'); 
  	}
	
  }); // end click
}); // end ready
</script>