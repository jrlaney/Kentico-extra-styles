$(document).ready(function(){
    //script that flips through the 3 diagram classe son a timer
    var images = ['hyperintelligence', 'mobility', 'federated-analytics'];
    var classIndex = -1;
    function changeBackground() {
        var diagram = $("#top-benefits");
        if (classIndex >= 0) {
            diagram.removeClass(images[classIndex]);
        }
        classIndex = (classIndex + 1) % images.length;
        diagram.addClass(images[classIndex]);
    }
    changeBackground();
    setInterval(changeBackground, 6000);

    //customer story slider script
    $('#customer-story-slider').slick({
		autoplay: false,
		//autoplaySpeed: 3000,
		cssEase: 'ease-out',
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
        asNavFor: '#customer-story-nav',
        fade: true,
		swipe: true,
		touchMove: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-chevron-left icon-block small black"></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-chevron-right icon-block small black"></button>',
	});
    $('#customer-story-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#customer-story-slider',
        arrows: false,
        dots: false,
        //centerMode: true,
        focusOnSelect: true,
        draggable: false,
        responsive: [
    		{
    			breakpoint: 980,
    			settings: {
                    slidesToShow: 3,
    			}
    		},
    		{
    			breakpoint: 768,
    			settings: {
                    slidesToShow: 2,
    			}
    		}
    	]
    });
});
