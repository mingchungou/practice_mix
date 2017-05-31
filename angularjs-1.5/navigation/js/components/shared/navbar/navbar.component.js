
"use strict";

app.component("appNavbar", {
    templateUrl: "js/components/shared/navbar/navbar.component.html",
    controller: "navbarController"
});

app.controller("navbarController", ["$location",
    function($location) {
        //Option list
        this.optionList = [{
            name: "Home",
            path: "home",
            parameters: []
        }, {
            name: "About",
            path: "about",
            parameters: []
        }, {
            name: "Service",
            path: "service",
            parameters: [12345678]
        }, {
            name: "Contact",
            path: "contact",
            parameters: []
        }];

        //Function for building option path according to each option properties.
        this.setPath = function(option) {
            var parameterLen = option.parameters.length,
                path = "#" + option.path;

            if (parameterLen > 0) {
                for (var i = 0; i < parameterLen; i++) {
                    path += "/" + option.parameters[i];
                }
            }

            return path;
        };

        //Function for checking which link matches with current location.
        this.isActive = function(destination) {
            var path = $location.path(),
                pathSplit = path.split("/");
            return destination === pathSplit[1];
        };
    }]);
