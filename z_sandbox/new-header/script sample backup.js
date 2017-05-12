<script type="text/javascript">
jQuery(document).ready(function(){
	//trigger sall menu open animations
	$('.primary-menu-button').click(function() {
	    $('body').toggleClass('menu-opened');
	});

	//triggers for all the panels and sub panels in the menu
	$('#primary-menu .parent-node').click(function() {
	    $(this).siblings().removeClass('active');
	    $(this).addClass('active');
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
	$('#primary-menu .level-1 > .parent-node').click(function() {
	    $('#primary-menu').removeClass();
		if ( $(this).hasClass('red')) {
		    $('#primary-menu').addClass('red');
		}
		else if ( $(this).hasClass('orange')) {
		    $('#primary-menu').addClass('orange');
		}
		else if ( $(this).hasClass('green')) {
		    $('#primary-menu').addClass('green');
		}
		else if ( $(this).hasClass('blue')) {
		    $('#primary-menu').addClass('blue');
		}
		else if ( $(this).hasClass('navy-blue')) {
		    $('#primary-menu').addClass('navy-blue');
		}
	});

	if ($('.preview-info-text').length > 0) {
	    $('body').addClass('CMS-preview-mode');
	};
});

</script>
