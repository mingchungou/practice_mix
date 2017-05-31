
"use strict";

var app = angular.module("myApp", ["LocalStorageModule"]);

angular.element(function() {
    angular.bootstrap(document, ["myApp"]);
});



/*
Note:
- ng-class - add classes dynamically based on conditions.
- ng-model - bind a HTML element to a javascript data.
- ng-repeat - clone HTML element for each item of collection.
- ng-show - decide show an element by adding display block based on the condition.
- ng-hide - decide hide an element by adding display none based on the condition.
- ng-if - decide if create or not an element based on the condition.
- ng-submit - handle submit event.
*/
