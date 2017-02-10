jQuery(document).ready(function(){
	$(".primary-menu-button").click(function() {
	    $("body").toggleClass('menu-opened');
	});

	$("#primary-menu .section-link").click(function() {
	    $("#primary-menu .section-link").removeClass('active');
	    $(this).addClass('active');
	});
});

if ($(".PageManagerPreviewInfo").length > 0) {
    $("body").addClass("CMS-preview-mode");
}
