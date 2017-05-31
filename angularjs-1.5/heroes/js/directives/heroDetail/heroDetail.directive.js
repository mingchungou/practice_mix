
"use strict";

app.directive("heroDetail", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "js/directives/heroDetail/heroDetail.directive.html",
        controllerAs: "$ctrl",
        controller: "heroDetailController",
        scope: {
            hero: "=",
            updateLocation: "&",
            deleteHero: "&"
        }
    };
});

app.controller("heroDetailController", ["$scope",
    function($scope) {
        //Function for calling parent update function.
        this.updateLocation = function(prop, value) {
            $scope.updateLocation({
                prop: prop,
                value: value
            });
        };
    }]);
