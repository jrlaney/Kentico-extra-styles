jQuery(document).ready(function($) { // wait for document ready

    if($(window).width() >= 768){

        setTimeout(function(){

            //variables for the scroll durations initial values
            var extForcesVar =   $("#external-forces").innerHeight();
            var entAssetsVar =   $("#enterprise-assets").innerHeight();
            var intPlatformVar = $("#intelligence-platform").innerHeight();
                var intPlatformSecurityVar =         $("#intelligence-platform #security").innerHeight();
                var intPlatformAppsVar =             $("#intelligence-platform #applications").innerHeight();
                var intPlatformDataVar =             $("#intelligence-platform #data").innerHeight();
                var intPlatformSchemaVar =           $("#intelligence-platform #schema").innerHeight();
                var intPlatformAppServicesVar =      $("#intelligence-platform #application-services").innerHeight();
                var intPlatformPlatformServicesVar = $("#intelligence-platform #platform-services").innerHeight();
            var intCenterVar =   $("#intelligence-center").innerHeight();
            var intArchiVar =    $("#intelligence-architecture").innerHeight();
            var intProgVar =     $("#intelligence-program").innerHeight();
            var intAppsVar =     $("#intelligence-applications").innerHeight();
                var intAppsDepartmentalVar =         $("#intelligence-applications #departmental").innerHeight();
                var intAppsApplicationsVar =         $("#intelligence-applications #apps-applications").innerHeight();
                var intAppsDevicesVar =              $("#intelligence-applications #devices").innerHeight();
                var intAppsConstituentsVar =         $("#intelligence-applications #constituents").innerHeight();
            var mapScrollVar = $("#map-scroll-content").innerHeight();

            //functions to set all of the height dynamically
            function extForcesHeight() {return (extForcesVar);}
            function entAssetsHeight() {return (entAssetsVar);}
            function intPlatformHeight() {return (intPlatformVar);}
                function intPlatformSecurityHeight() {return (intPlatformSecurityVar);}
                function intPlatformAppsHeight() {return (intPlatformAppsVar);}
                function intPlatformDataHeight() {return (intPlatformDataVar);}
                function intPlatformSchemaHeight() {return (intPlatformSchemaVar);}
                function intPlatformAppServicesHeight() {return (intPlatformAppServicesVar);}
                function intPlatformPlatformServicesHeight() {return (intPlatformPlatformServicesVar);}
            function intCenterHeight() {return (intCenterVar);}
            function intArchiHeight() {return (intArchiVar);}
            function intProgHeight() {return (intProgVar);}
            function intAppsHeight() {return (intAppsVar);}
                function intAppsDepartmentalHeight() {return (intAppsDepartmentalVar);}
                function intAppsApplicationsHeight() {return (intAppsApplicationsVar);}
                function intAppsDevicesHeight() {return (intAppsDevicesVar);}
                function intAppsConstituentsHeight() {return (intAppsConstituentsVar);}
            function mapScrollHeight() {return (mapScrollVar);}

            //determine all the heights for the scrolls
            $( window ).resize(function() {
                extForcesVar =   $("#external-forces").innerHeight();
                entAssetsVar =   $("#enterprise-assets").innerHeight();
                intPlatformVar = $("#intelligence-platform").innerHeight();
                    intPlatformSecurityVar =         $("#intelligence-platform #security").innerHeight();
                    intPlatformAppsVar =             $("#intelligence-platform #applications").innerHeight();
                    intPlatformDataVar =             $("#intelligence-platform #data").innerHeight();
                    intPlatformSchemaVar =           $("#intelligence-platform #schema").innerHeight();
                    intPlatformAppServicesVar =      $("#intelligence-platform #application-services").innerHeight();
                    intPlatformPlatformServicesVar = $("#intelligence-platform #platform-services").innerHeight();
                intCenterVar =   $("#intelligence-center").innerHeight();
                intArchiVar =    $("#intelligence-architecture").innerHeight();
                intProgVar =     $("#intelligence-program").innerHeight();
                intAppsVar =     $("#intelligence-applications").innerHeight();
                    intAppsDepartmentalVar =         $("#intelligence-applications #departmental").innerHeight();
                    intAppsApplicationsVar =         $("#intelligence-applications #apps-applications").innerHeight();
                    intAppsDevicesVar =              $("#intelligence-applications #devices").innerHeight();
                    intAppsConstituentsVar =         $("#intelligence-applications #constituents").innerHeight();
                mapScrollVar = $("#map-scroll-content").innerHeight();
            });



            //build and play out all of the scroll scenes
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
                                    .setClassToggle("#intelligence-map .feature-list.security", "active") // add class toggle
                                    //.addIndicators({name: "security"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformApplicationZone = new ScrollMagic.Scene({triggerElement: "#applications", duration: intPlatformAppsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.applications", "active") // add class toggle
                                    //.addIndicators({name: "applications"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformDataZone = new ScrollMagic.Scene({triggerElement: "#data", duration: intPlatformDataHeight})
                                    .setClassToggle("#intelligence-map .feature-list.data", "active") // add class toggle
                                    //.addIndicators({name: "data"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformSchemaZone = new ScrollMagic.Scene({triggerElement: "#schema", duration: intPlatformSchemaHeight})
                                    .setClassToggle("#intelligence-map .feature-list.schema", "active") // add class toggle
                                    //.addIndicators({name: "schema"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformAppServicesZone = new ScrollMagic.Scene({triggerElement: "#application-services", duration: intPlatformAppServicesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.application-services", "active") // add class toggle
                                    //.addIndicators({name: "application-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intPlatformPlatformServicesZone = new ScrollMagic.Scene({triggerElement: "#platform-services", duration: intPlatformPlatformServicesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.platform-services", "active") // add class toggle
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
                                    .setClassToggle("#intelligence-map .feature-list.departmental", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsApplicationsZone = new ScrollMagic.Scene({triggerElement: "#apps-applications", duration: intAppsApplicationsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.apps-applications", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsDevicesZone = new ScrollMagic.Scene({triggerElement: "#devices", duration: intAppsDevicesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.devices", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsConstituentsZone = new ScrollMagic.Scene({triggerElement: "#constituents", duration: intAppsConstituentsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.constituents", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);
        }, 2000);
    }

});
