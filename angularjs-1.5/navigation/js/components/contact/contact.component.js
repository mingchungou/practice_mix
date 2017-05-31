
"use strict";

app.component("appContact", {
    templateUrl: "js/components/contact/contact.component.html",
    controller: "contactController"
});

app.controller("contactController", ["$location",
    function($location) {
        this.customNavigate = function() {
            $location.path("/about");
        };
    }]);
