
"use strict";

app.directive("myPane", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        require: "^myTab",
        templateUrl: "js/directives/myPane/myPane.directive.html",
        controllerAs: "$ctrl",
        compile: function($element, $attrs, $transclude) {
            return {
                post: function($scope, $element, $attrs, $tabsCtrl) {
                    //Accessing parent addPane function.
                    $tabsCtrl.addPane($scope);
                }
            };
        },
        scope: {
            title: "@"
        }
    };
});
