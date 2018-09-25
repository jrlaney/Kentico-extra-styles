jQuery(document).ready(function(){
	//trigger all menu open animations
	$('.primary-menu-button').click(function() {
	    $('body').toggleClass('primary-menu-opened');
	});

	//triggers for all the panels and sub panels in the menu
	$('#primary-menu-design .parent-node > .menu-item').click(function() {
	    $(this).parent('.parent-node').siblings().removeClass('active');
		$(this).parent('.parent-node').siblings().find('.parent-node.active').removeClass('active');
	    $(this).parent('.parent-node').addClass('active');
	});

	//triggers the back button traversal for mobile view
	$('#primary-menu-design .parent-node .menu-item.back').click(function() {
		$(this).closest('.parent-node.active').removeClass('active');
		$(this).siblings('.parent-node.active').removeClass('active');
	});

	//remove any initial active link in mobile view and clear active status when exiting the menu
	if (screen.width <= 768) {
		$('#primary-menu-design .parent-node').removeClass('active');
		$('.primary-menu-button').click(function() {
		    $('#primary-menu-design .parent-node').removeClass('active');
		});
	}

	//set initial color based on active level-1
	if ( $('#primary-menu-design .level-1 > .parent-node.active').hasClass('red')) {
		$('#primary-menu-design').addClass('red');
	}
	else if ( $('#primary-menu-design .level-1 > .parent-node.active').hasClass('orange')) {
		$('#primary-menu-design').addClass('orange');
	}
	else if ( $('#primary-menu-design .level-1 > .parent-node.active').hasClass('green')) {
		$('#primary-menu-design').addClass('green');
	}
	else if ( $('#primary-menu-design .level-1 > .parent-node.active').hasClass('blue')) {
		$('#primary-menu-design').addClass('blue');
	}
	else if ( $('#primary-menu-design .level-1 > .parent-node.active').hasClass('navy-blue')) {
		$('#primary-menu-design').addClass('navy-blue');
	}

	//triggers color change for level-1 elements
	$('#primary-menu-design .level-1 > .parent-node > .menu-item').click(function() {
	    $('#primary-menu-design').removeClass();
		if ( $(this).parent('.parent-node').hasClass('red')) {
		    $('#primary-menu-design').addClass('red');
		}
		else if ( $(this).parent('.parent-node').hasClass('orange')) {
		    $('#primary-menu-design').addClass('orange');
		}
		else if ( $(this).parent('.parent-node').hasClass('green')) {
		    $('#primary-menu-design').addClass('green');
		}
		else if ( $(this).parent('.parent-node').hasClass('blue')) {
		    $('#primary-menu-design').addClass('blue');
		}
		else if ( $(this).parent('.parent-node').hasClass('navy-blue')) {
		    $('#primary-menu-design').addClass('navy-blue');
		}
	});

	//adds a class to the body if the page is in preview mode so the fixed menu doesnt go under the text for that
	if ($('.preview-info-text').length > 0) {
	    $('body').addClass('CMS-preview-mode');
	};
});
