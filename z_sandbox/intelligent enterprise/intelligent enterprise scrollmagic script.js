jQuery(document).ready(function($) { // wait for document ready

    if($(window).width() >= 768){

        setTimeout(function(){
            //variables for the scroll durations
            var extForcesHeight = $("#external-forces").innerHeight()
            var entAssetsHeight = $("#enterprise-assets").innerHeight()
            var intPlatformHeight = $("#intelligence-platform").innerHeight()
                var intPlatformSecurityHeight =         $("#intelligence-platform #security").innerHeight()
                var intPlatformAppsHeight =             $("#intelligence-platform #applications").innerHeight()
                var intPlatformDataHeight =             $("#intelligence-platform #data").innerHeight()
                var intPlatformSchemaHeight =           $("#intelligence-platform #schema").innerHeight()
                var intPlatformAppServicesHeight =      $("#intelligence-platform #application-services").innerHeight()
                var intPlatformPlatformServicesHeight = $("#intelligence-platform #platform-services").innerHeight()
            var intCenterHeight = $("#intelligence-center").innerHeight()
            var intArchiHeight = $("#intelligence-architecture").innerHeight()
            var intProgHeight = $("#intelligence-program").innerHeight()
            var intAppsHeight = $("#intelligence-applications").innerHeight()
                var intAppsDepartmentalHeight =         $("#intelligence-applications #departmental").innerHeight()
                var intAppsApplicationsHeight =         $("#intelligence-applications #apps-applications").innerHeight()
                var intAppsDevicesHeight =              $("#intelligence-applications #devices").innerHeight()
                var intAppsConstituentsHeight =         $("#intelligence-applications #constituents").innerHeight()

            var mapScrollHeight = $("#map-scroll-content").innerHeight()
            var finalMapScroll = mapScrollHeight - (intAppsHeight / 2)

            // init
            var controller = new ScrollMagic.Controller();

            // build scene

            //make the hero sticky
            var pinHero = new ScrollMagic.Scene({
                triggerElement: "#hero",
                duration: "150%",
                triggerHook: "0"
            })
            .setPin("#hero", {pushFollowers: false})
            ////.addIndicators({name: "sticky"}) // add indicators (requires plugin)
            .addTo(controller);

            //make the map sticky
            var pinMap = new ScrollMagic.Scene({
                triggerElement: "#intelligence-map",
                duration: mapScrollHeight
                //triggerHook: "onLeave"
            })
            .setPin("#intelligence-map", {pushFollowers: false})
            .setClassToggle("#intelligence-map", "sticky-mode") // add class toggle
            //.addIndicators({name: "pinmap"}) // add indicators (requires plugin)
            .addTo(controller);


            //animate the map at different points
            var extForcesZone = new ScrollMagic.Scene({triggerElement: "#external-forces", duration: extForcesHeight})
                            .setClassToggle("#intelligence-map", "ext-forces") // add class toggle
                            //.addIndicators({name: "ext forces"}) // add indicators (requires plugin)
                            .addTo(controller);

            var intAssetsZone = new ScrollMagic.Scene({triggerElement: "#enterprise-assets", duration: entAssetsHeight})
                            .setClassToggle("#intelligence-map", "ent-assets") // add class toggle
                            //.addIndicators({name: "ent assets"}) // add indicators (requires plugin)
                            .addTo(controller);

            var intPlatformZone = new ScrollMagic.Scene({triggerElement: "#intelligence-platform", duration: intPlatformHeight})
                            .setClassToggle("#intelligence-map", "int-platform") // add class toggle
                            //.addIndicators({name: "int platform"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intPlatformSecurityZone = new ScrollMagic.Scene({triggerElement: "#security", duration: intPlatformSecurityHeight})
                                    .setClassToggle("#intelligence-map .icon-list.security", "active") // add class toggle
                                    //.addIndicators({name: "security"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformApplicationZone = new ScrollMagic.Scene({triggerElement: "#applications", duration: intPlatformAppsHeight})
                                    .setClassToggle("#intelligence-map .icon-list.applications", "active") // add class toggle
                                    //.addIndicators({name: "applications"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformDataZone = new ScrollMagic.Scene({triggerElement: "#data", duration: intPlatformDataHeight})
                                    .setClassToggle("#intelligence-map .icon-list.data", "active") // add class toggle
                                    //.addIndicators({name: "data"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformSchemaZone = new ScrollMagic.Scene({triggerElement: "#schema", duration: intPlatformSchemaHeight})
                                    .setClassToggle("#intelligence-map .icon-list.schema", "active") // add class toggle
                                    //.addIndicators({name: "schema"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformAppServicesZone = new ScrollMagic.Scene({triggerElement: "#application-services", duration: intPlatformAppServicesHeight})
                                    .setClassToggle("#intelligence-map .icon-list.application-services", "active") // add class toggle
                                    //.addIndicators({name: "application-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformPlatformServicesZone = new ScrollMagic.Scene({triggerElement: "#platform-services", duration: intPlatformPlatformServicesHeight})
                                    .setClassToggle("#intelligence-map .icon-list.platform-services", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

            var intCenterZone = new ScrollMagic.Scene({triggerElement: "#intelligence-center", duration: intCenterHeight})
                            .setClassToggle("#intelligence-map", "int-center") // add class toggle
                            //.addIndicators({name: "int center"}) // add indicators (requires plugin)
                            .addTo(controller);

            var intArchiZone = new ScrollMagic.Scene({triggerElement: "#intelligence-architecture", duration: intArchiHeight})
                            .setClassToggle("#intelligence-map", "int-architecture") // add class toggle
                            //.addIndicators({name: "int architecture"}) // add indicators (requires plugin)
                            .addTo(controller);

            var intProgZone = new ScrollMagic.Scene({triggerElement: "#intelligence-program", duration: intProgHeight})
                            .setClassToggle("#intelligence-map", "int-program") // add class toggle
                            //.addIndicators({name: "int program"}) // add indicators (requires plugin)
                            .addTo(controller);

            var intAppsZone = new ScrollMagic.Scene({triggerElement: "#intelligence-applications"})
                            .setClassToggle("#intelligence-map", "int-applications") // add class toggle
                            //.addIndicators({name: "int applications"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intAppsDepartmentalZone = new ScrollMagic.Scene({triggerElement: "#departmental", duration: intAppsDepartmentalHeight})
                                    .setClassToggle("#intelligence-map .icon-list.departmental", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsApplicationsZone = new ScrollMagic.Scene({triggerElement: "#apps-applications", duration: intAppsApplicationsHeight})
                                    .setClassToggle("#intelligence-map .icon-list.apps-applications", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsDevicesZone = new ScrollMagic.Scene({triggerElement: "#devices", duration: intAppsDevicesHeight})
                                    .setClassToggle("#intelligence-map .icon-list.devices", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsConstituentsZone = new ScrollMagic.Scene({triggerElement: "#constituents", duration: intAppsConstituentsHeight})
                                    .setClassToggle("#intelligence-map .icon-list.constituents", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);
        }, 2000);
    }

});
