jQuery(document).ready(function($) { // wait for document ready

    if($(window).width() >= 768){

        setTimeout(function(){

            //variables for the scroll durations initial values
            var extForcesVar =   $("#external-forces").innerHeight();
            var entAssetsVar =   $("#enterprise-assets").innerHeight();
            var intMetadataVar = $("#intelligence-metadata").innerHeight();
                var intMetadataClientProductsVar =   $("#intelligence-metadata #client-products").innerHeight();
                var intMetadataSecurityVar =         $("#intelligence-metadata #security").innerHeight();
                var intMetadataAppsVar =             $("#intelligence-metadata #applications").innerHeight();
                var intMetadataDataVar =             $("#intelligence-metadata #data").innerHeight();
                var intMetadataSchemaVar =           $("#intelligence-metadata #schema").innerHeight();
            var intServicesVar = $("#intelligence-services").innerHeight();
                var intServicesAppServicesVar =      $("#intelligence-services #application-services").innerHeight();
                var intServicesPlatformServicesVar = $("#intelligence-services #platform-services").innerHeight();
                var intServicesDriversGatewaysVar =  $("#intelligence-services #drivers-gateways").innerHeight();
            var intCenterVar =   $("#intelligence-center").innerHeight();
                var intCenterProgramsVar =           $("#intelligence-center #programs").innerHeight();
                var intCenterArchitectureVar =       $("#intelligence-center #architecture").innerHeight();
                var intCenterDeploymentVar =         $("#intelligence-center #deployment").innerHeight();
                var intCenterPersonasVar =           $("#intelligence-center #personas").innerHeight();
            var intAppsVar =     $("#intelligence-applications").innerHeight();
                var intAppsRolesVar =                $("#intelligence-applications #roles").innerHeight();
                var intAppsApplicationsVar =         $("#intelligence-applications #apps-applications").innerHeight();
                var intAppsDevicesVar =              $("#intelligence-applications #devices").innerHeight();
                var intAppsFunctionsVar =            $("#intelligence-applications #functions").innerHeight();
                var intAppsUsersVar =                $("#intelligence-applications #users").innerHeight();
            var mapScrollVar = $("#map-scroll-content").innerHeight();

            //functions to set all of the height dynamically
            function extForcesHeight() {return (extForcesVar);}
            function entAssetsHeight() {return (entAssetsVar);}
            function intMetadataHeight() {return (intMetadataVar);}
                function intMetadataClientProductsHeight() {return (intMetadataClientProductsVar);}
                function intMetadataSecurityHeight() {return (intMetadataSecurityVar);}
                function intMetadataAppsHeight() {return (intMetadataAppsVar);}
                function intMetadataDataHeight() {return (intMetadataDataVar);}
                function intMetadataSchemaHeight() {return (intMetadataSchemaVar);}
            function intServicesHeight() {return (intServicesVar);}
                function intServicesAppServicesHeight() {return (intServicesAppServicesVar);}
                function intServicesPlatformServicesHeight() {return (intServicesPlatformServicesVar);}
                function intServicesDriversGatewaysHeight() {return (intServicesDriversGatewaysVar);}
            function intCenterHeight() {return (intCenterVar);}
                function intCenterProgramsHeight() {return (intCenterProgramsVar);}
                function intCenterArchitectureHeight() {return (intCenterArchitectureVar);}
                function intCenterDeploymentHeight() {return (intCenterDeploymentVar);}
                function intCenterPersonasHeight() {return (intCenterPersonasVar);}
            function intAppsHeight() {return (intAppsVar);}
                function intAppsRolesHeight() {return (intAppsRolesVar);}
                function intAppsApplicationsHeight() {return (intAppsApplicationsVar);}
                function intAppsDevicesHeight() {return (intAppsDevicesVar);}
                function intAppsFunctionsHeight() {return (intAppsFunctionsVar);}
                function intAppsUsersHeight() {return (intAppsUsersVar);}
            function mapScrollHeight() {return (mapScrollVar);}

            //determine all the heights for the scrolls
            $( window ).resize(function() {
                extForcesVar =   $("#external-forces").innerHeight();
                entAssetsVar =   $("#enterprise-assets").innerHeight();
                intMetadataVar = $("#intelligence-metadata").innerHeight();
                    intMetadataClientProductsVar =   $("#intelligence-metadata #client-products").innerHeight();
                    intMetadataSecurityVar =         $("#intelligence-metadata #security").innerHeight();
                    intMetadataAppsVar =             $("#intelligence-metadata #applications").innerHeight();
                    intMetadataDataVar =             $("#intelligence-metadata #data").innerHeight();
                    intMetadataSchemaVar =           $("#intelligence-metadata #schema").innerHeight();
                intServicesVar = $("#intelligence-services").innerHeight();
                    intServicesAppServicesVar =      $("#intelligence-services #application-services").innerHeight();
                    intServicesPlatformServicesVar = $("#intelligence-services #platform-services").innerHeight();
                    intServicesDriversGatewaysVar =  $("#intelligence-services #drivers-gateways").innerHeight();
                intCenterVar =   $("#intelligence-center").innerHeight();
                    intCenterProgramsVar =           $("#intelligence-center #programs").innerHeight();
                    intCenterArchitectureVar =       $("#intelligence-center #architecture").innerHeight();
                    intCenterDeploymentVar =         $("#intelligence-center #deployment").innerHeight();
                    intCenterPersonasVar =           $("#intelligence-center #personas").innerHeight();
                intAppsVar =     $("#intelligence-applications").innerHeight();
                    intAppsRolesVar =                $("#intelligence-applications #roles").innerHeight();
                    intAppsApplicationsVar =         $("#intelligence-applications #apps-applications").innerHeight();
                    intAppsDevicesVar =              $("#intelligence-applications #devices").innerHeight();
                    intAppsFunctionsVar =            $("#intelligence-applications #functions").innerHeight();
                    intAppsUsersVar =                $("#intelligence-applications #users").innerHeight();
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

            var intMetadataZone = new ScrollMagic.Scene({triggerElement: "#intelligence-metadata", duration: intMetadataHeight})
                            .setClassToggle("#intelligence-map", "int-metadata") // add class toggle
                            //.addIndicators({name: "int platform"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intMetadataClientProductsZone = new ScrollMagic.Scene({triggerElement: "#client-products", duration: intMetadataClientProductsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.client-products", "active") // add class toggle
                                    //.addIndicators({name: "security"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intMetadataSecurityZone = new ScrollMagic.Scene({triggerElement: "#security", duration: intMetadataSecurityHeight})
                                    .setClassToggle("#intelligence-map .feature-list.security", "active") // add class toggle
                                    //.addIndicators({name: "security"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intMetadataApplicationZone = new ScrollMagic.Scene({triggerElement: "#applications", duration: intMetadataAppsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.applications", "active") // add class toggle
                                    //.addIndicators({name: "applications"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intMetadataDataZone = new ScrollMagic.Scene({triggerElement: "#data", duration: intMetadataDataHeight})
                                    .setClassToggle("#intelligence-map .feature-list.data", "active") // add class toggle
                                    //.addIndicators({name: "data"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intMetadataSchemaZone = new ScrollMagic.Scene({triggerElement: "#schema", duration: intMetadataSchemaHeight})
                                    .setClassToggle("#intelligence-map .feature-list.schema", "active") // add class toggle
                                    //.addIndicators({name: "schema"}) // add indicators (requires plugin)
                                    .addTo(controller);

            var intServicesZone = new ScrollMagic.Scene({triggerElement: "#intelligence-services", duration: intServicesHeight})
                            .setClassToggle("#intelligence-map", "int-services") // add class toggle
                            //.addIndicators({name: "int platform"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intServicesAppServicesZone = new ScrollMagic.Scene({triggerElement: "#application-services", duration: intServicesAppServicesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.application-services", "active") // add class toggle
                                    //.addIndicators({name: "application-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intServicesPlatformServicesZone = new ScrollMagic.Scene({triggerElement: "#platform-services", duration: intServicesPlatformServicesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.platform-services", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intServicesDriversGatewaysZone = new ScrollMagic.Scene({triggerElement: "#drivers-gateways", duration: intServicesDriversGatewaysHeight})
                                    .setClassToggle("#intelligence-map .feature-list.drivers-gateways", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

            var intCenterZone = new ScrollMagic.Scene({triggerElement: "#intelligence-center", duration: intCenterHeight})
                            .setClassToggle("#intelligence-map", "int-center") // add class toggle
                            //.addIndicators({name: "int center"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intCenterProgramsZone = new ScrollMagic.Scene({triggerElement: "#programs", duration: intCenterProgramsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.programs", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intCenterArchitectureZone = new ScrollMagic.Scene({triggerElement: "#architecture", duration: intCenterArchitectureHeight})
                                    .setClassToggle("#intelligence-map .feature-list.architecture", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intCenterDeploymentZone = new ScrollMagic.Scene({triggerElement: "#deployment", duration: intCenterDeploymentHeight})
                                    .setClassToggle("#intelligence-map .feature-list.deployment", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intCenterPersonasZone = new ScrollMagic.Scene({triggerElement: "#personas", duration: intCenterPersonasHeight})
                                    .setClassToggle("#intelligence-map .feature-list.personas", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

            var intAppsZone = new ScrollMagic.Scene({triggerElement: "#intelligence-applications"})
                            .setClassToggle("#intelligence-map", "int-applications") // add class toggle
                            //.addIndicators({name: "int applications"}) // add indicators (requires plugin)
                            .addTo(controller);

                    var intAppsRolesZone = new ScrollMagic.Scene({triggerElement: "#roles", duration: intAppsRolesHeight})
                                    .setClassToggle("#intelligence-map .feature-list.roles", "active") // add class toggle
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

                    var intAppsFunctionsZone = new ScrollMagic.Scene({triggerElement: "#functions", duration: intAppsFunctionsHeight})
                                    .setClassToggle("#intelligence-map .feature-list.functions", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);

                    var intAppsUsersZone = new ScrollMagic.Scene({triggerElement: "#users", duration: intAppsUsersHeight})
                                    .setClassToggle("#intelligence-map .feature-list.users", "active") // add class toggle
                                    //.addIndicators({name: "platform-services"}) // add indicators (requires plugin)
                                    .addTo(controller);
        }, 2000);
    }

});
