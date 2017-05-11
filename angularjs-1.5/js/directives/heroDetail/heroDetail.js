"use strict";

app.directive("heroDetail", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "js/directives/heroDetail/heroDetail.html",
        controllerAs: "$ctrl",
        controller: heroDetailController,
        scope: {
            hero: "=",
            onUpdate: "&",
            onDelete: "&"
        }
    };
});

function heroDetailController($scope, $attrs) {
    //Function for calling parent update function
    this.update = function(prop, value) {
        $scope.onUpdate({
            prop: prop,
            value: value
        });
    };
};
