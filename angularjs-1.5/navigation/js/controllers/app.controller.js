
"use strict";

app.controller("mainController", ["$scope", "$route",
    function($scope, $route) {
        var self = this;
        this.currentPath = "";

        $scope.$on("$routeChangeStart", function(ev, next, current) {

        });

        $scope.$on("$routeChangeSuccess", function(ev, current, previous) {
            self.currentPath = current.$$route.originalPath;
        });

        $scope.$on("$routeChangeError", function(ev, current, previous, $q) {
            console.error("Error on changing route");
        });
    }]);
