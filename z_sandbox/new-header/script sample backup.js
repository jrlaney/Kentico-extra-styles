<script type="text/javascript">
jQuery(document).ready(function(){
	//trigger all menu open animations
	$('.primary-menu-button').click(function() {
	    $('body').toggleClass('menu-opened');
	});

	//triggers for all the panels and sub panels in the menu
	$('#primary-menu .parent-node > .sub-link').click(function() {
	    $(this).parent('.parent-node').siblings().removeClass('active');
		$(this).parent('.parent-node').siblings().find('.parent-node.active').removeClass('active');
	    $(this).parent('.parent-node').addClass('active');
	});

	//triggers the back button traversal for mobile view
	$('#primary-menu .parent-node .sub-link.back').click(function() {
		$(this).closest('.parent-node.active').removeClass('active');
		$(this).siblings('.parent-node.active').removeClass('active');
	});

	//set initial color based on active level-1
	if ( $('#primary-menu .level-1 > .parent-node.active').hasClass('red')) {
		$('#primary-menu').addClass('red');
	}
	else if ( $('#primary-menu .level-1 > .parent-node.active').hasClass('orange')) {
		$('#primary-menu').addClass('orange');
	}
	else if ( $('#primary-menu .level-1 > .parent-node.active').hasClass('green')) {
		$('#primary-menu').addClass('green');
	}
	else if ( $('#primary-menu .level-1 > .parent-node.active').hasClass('blue')) {
		$('#primary-menu').addClass('blue');
	}
	else if ( $('#primary-menu .level-1 > .parent-node.active').hasClass('navy-blue')) {
		$('#primary-menu').addClass('navy-blue');
	}

	//triggers color change for level-1 elements
	$('#primary-menu .level-1 > .parent-node > .sub-link').click(function() {
	    $('#primary-menu').removeClass();
		if ( $(this).parent('.parent-node').hasClass('red')) {
		    $('#primary-menu').addClass('red');
		}
		else if ( $(this).parent('.parent-node').hasClass('orange')) {
		    $('#primary-menu').addClass('orange');
		}
		else if ( $(this).parent('.parent-node').hasClass('green')) {
		    $('#primary-menu').addClass('green');
		}
		else if ( $(this).parent('.parent-node').hasClass('blue')) {
		    $('#primary-menu').addClass('blue');
		}
		else if ( $(this).parent('.parent-node').hasClass('navy-blue')) {
		    $('#primary-menu').addClass('navy-blue');
		}
	});

	if ($('.preview-info-text').length > 0) {
	    $('body').addClass('CMS-preview-mode');
	};
});

</script>
