//Module is a global place for creating, registering and retrieving Angularjs modules.

"use strict";

var app = angular.module("myApp", ["LocalStorageModule"]);

angular.element(function() {
    angular.bootstrap(document, ["myApp"]);
});
