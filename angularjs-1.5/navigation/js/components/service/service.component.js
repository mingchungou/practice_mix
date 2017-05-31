
"use strict";

app.component("appService", {
    templateUrl: "js/components/service/service.component.html",
    controller: "serviceController"
});

app.controller("serviceController", ["$routeParams",
    function($routeParams) {
        console.log($routeParams);
    }]);
