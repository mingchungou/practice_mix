
"use strict";

app.component("appHome", {
    templateUrl: "js/components/home/home.component.html",
    controller: "homeController"
});

app.controller("homeController", ["$scope", "$location",
    function($scope, $location) {
        //Function for checking which link matches with current location.
        this.isActive = function(destination) {
            var path = $location.path(),
                pathSplit = path.split("/");
            return destination === pathSplit[1];
        };

        $scope.$on("$routeChangeStart", function(ev, next, current) {

        });

        $scope.$on("$routeChangeSuccess", function(ev, current, previous) {

        });

        $scope.$on("$routeChangeError", function(ev, current, previous, $q) {
            console.log("Error on changing route");
        });
    }]);
