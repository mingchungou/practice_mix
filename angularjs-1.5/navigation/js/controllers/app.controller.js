
"use strict";

app.controller("mainController", ["$scope",
    function($scope) {
        $scope.$on("$routeChangeStart", function(ev, next, current) {

        });

        $scope.$on("$routeChangeSuccess", function(ev, current, previous) {

        });

        $scope.$on("$routeChangeError", function(ev, current, previous, $q) {
            console.log("Error on changing route");
        });
    }]);
