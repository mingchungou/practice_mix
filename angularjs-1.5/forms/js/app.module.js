
"use strict";

var app = angular.module("myApp", []);

angular.element(function() {
    angular.bootstrap(document, ["myApp"]);
});



/*
Note:
- Can use directive to create custom validator for input form.

- ng-required - its equal than input required.
- ng-minlength - its equal than input minlength.
- ng-maxlength - its equal than input maxlength.
- ng-pattern - its equal than input pattern.
- ng-value - its similar than input value but it can contain more data like array,
object, etc.
- ng-true-value - indicate the value of checkbox when it is checked.
- ng-false-value - indicate the value of checkbox when it isn't checked.
*/
