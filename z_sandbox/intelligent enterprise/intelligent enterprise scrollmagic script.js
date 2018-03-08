jQuery(document).ready(function($) { // wait for document ready
    //setTimeout(function(){
        // init
        var controller = new ScrollMagic.Controller();

        //get the value of the scrollbox for the map
        // var scrollBoxHeight = $('#scroll-content').innerHeight() - $('#hero').innerHeight() - ($('#intelligence-map').innerHeight() / 2) - ($('#intelligence-applications').innerHeight() / 2);
        // console.log(scrollBoxHeight);
        //
        // $( window ).on("resize", function() {
        //    scrollBoxHeight = $('#scroll-content').innerHeight();
        //    console.log(scrollBoxHeight);
        // });

        // build scene
        //make the map sticky
        var pinMap = new ScrollMagic.Scene({
            triggerElement: "#intelligence-map",
            duration: "680%"
            //triggerHook: "onLeave"
        })
        .setPin("#intelligence-map", {pushFollowers: false})
        .setClassToggle("#intelligence-map", "sticky-mode") // add class toggle
        //.addIndicators({name: "sticky"}) // add indicators (requires plugin)
        .addTo(controller);


        //animate the map at different points
        new ScrollMagic.Scene({triggerElement: "#external-forces", duration:"100%"})
                        .setClassToggle("#intelligence-map", "ext-forces") // add class toggle
                        //.addIndicators({name: "ext forces"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#enterprise-assets", duration:"100%"})
                        .setClassToggle("#intelligence-map", "ent-assets") // add class toggle
                        //.addIndicators({name: "ent assets"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#intelligence-platform", duration:"100%"})
                        .setClassToggle("#intelligence-map", "int-platform") // add class toggle
                        //.addIndicators({name: "int platform"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#intelligence-center", duration:"100%"})
                        .setClassToggle("#intelligence-map", "int-center") // add class toggle
                        //.addIndicators({name: "int center"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#intelligence-architecture", duration:"100%"})
                        .setClassToggle("#intelligence-map", "int-architecture") // add class toggle
                        //.addIndicators({name: "int architecture"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#intelligence-program", duration: "100%"})
                        .setClassToggle("#intelligence-map", "int-program") // add class toggle
                        //.addIndicators({name: "int program"}) // add indicators (requires plugin)
                        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#intelligence-applications"})
                        .setClassToggle("#intelligence-map", "int-applications") // add class toggle
                        //.addIndicators({name: "int applications"}) // add indicators (requires plugin)
                        .addTo(controller);
    //}, 3000);

});
