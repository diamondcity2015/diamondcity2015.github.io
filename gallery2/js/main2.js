<script>
	$(document).ready(function () {
		$("divId img").on({
			mouseover: function () {
				$(this).css({
					"cursor":"pointer",
					"border-Color" : "red"
				});
			},
			mouseout : function(){
				$(this).css({
					"cursor":"default",
					"border-Color" : "grey"
				});
			},

			click: function () {
				var imageUrl = $(this).attr("src");
				$("#mainImage").attr("src", imageUrl);
			}
			
		});

	});
</script>