
"use strict";

app.component("appService", {
    templateUrl: "js/components/service/service.component.html",
    controller: "serviceController"
});

app.controller("serviceController", ["$routeParams", "$location",
    function($routeParams, $location) {
        var self = this;

        this.navigate = function() {
            $location.path("/service/1234567");
        };

        this.$onInit = function() {
            if ($routeParams.id) {
                self.serviceID = $routeParams.id;
            }
        };
    }]);
