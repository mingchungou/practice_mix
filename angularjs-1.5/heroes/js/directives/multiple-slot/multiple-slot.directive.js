
"use strict";

app.directive("multipleSlot", function () {
    return {
        restrict: "E",
        transclude: {
            /*title: "h3",
            content: "p"*/
            
            title: "?paneTitle",
            content: "paneContent"
        },
        replace: true,
        templateUrl: "js/directives/multiple-slot/multiple-slot.directive.html",
        controllerAs: "$ctrl"
    };
});
