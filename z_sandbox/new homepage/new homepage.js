jQuery(document).ready(function($){

    var images = ['first', 'second', 'third'];
    // Remember where we are in the array, start just before the first entry
    var classIndex = -1;

    function changeBackground() {

        // Grab the element
        var hero = $("#hero");

        // If this isn't the first time, remove the previous class
        if (classIndex >= 0) {
            hero.removeClass(images[classIndex]);
        }

        // Update the index, wrapping around when we reach the end of the array
        classIndex = (classIndex + 1) % images.length;

        // Add the new class
        hero.addClass(images[classIndex]);
    }

    changeBackground();
    setInterval(changeBackground, 6000);

});
