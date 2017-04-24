"use strict";

var app = angular.module( "myApp", [ "ngRoute" ] );

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<hero-list></hero-list>"
        })
        .otherwise({
            redirectTo: "/"
        });
});
