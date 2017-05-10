<script type="text/javascript">
jQuery(document).ready(function(){
	//trigger sall menu open animations
	$(".primary-menu-button").click(function() {
	    $("body").toggleClass('menu-opened');
	});

	//triggers for all the panels and sub panels in the menu
	$("#primary-menu .parent-node").click(function() {
	    $(this).siblings().removeClass('active');
	    $(this).addClass('active');
	});

	if ($(".preview-info-text").length > 0) {
	    $("body").addClass("CMS-preview-mode");
	};
});

</script>
