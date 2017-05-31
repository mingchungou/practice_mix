
"use strict";

/*
Angular Directive
- A directive indicates to Angularjs compiler that has to asign some behaviour to
specific element.
- A directive also can contain HTML code that could be reusable.
*/

app.directive("mainExample", function() {
    return {
        /*
        - Specify the manner to call this directive.
        - Options: E - tag, A - attribute, C - class, M - comment.
        */
        restrict: "AECM",

        //Specify if replace directive tag to directive content. Used specifically when transcluding.
        //replace: true,

        //Specify if directive wraps other elements.
        //transclude: true,

        //Specify if directive requires other directive.
        //require: "^otherDirective",

        /*
        Add Dom element by string
        - Here can be a string template or a function that return a string template.
        */
        //template: "<h1>Hi Luffy</h1>",

        /*
        Add Dom element by external file
        - Here can be a string as path or a function that return the file path.
        */
        templateUrl: "js/directives/example.directive.html",

        //Add controller to directive
        controller: "mainExampleController",

        //Symbol to represent controller, can be treated as this.
        controllerAs: "$ctrl",

        /*
        Used mainly for attaching DOM events, but if there is set compile function,
        this won't be called.
        */
        /*link: function($scope, $element, $attrs) {
            console.log($scope);
        },*/

        //Compile executes after controller is read.
        compile: function($element, $attrs, $transclude) {
            return {
                pre: function preLink($scope, $element, $attrs, $transcludeCtrl) {
                    /*
                    Execute before child elements are linked, so it is not safe to
                    make DOM transformation.
                    */
                    console.log($scope);
                },
                post: function postLink($scope, $element, $attrs, $transcludeCtrl) {
                    /*
                    Execute after child elements are linked, so it is safe to make
                    DOM transformation.
                    */
                    console.log($scope);
                }
            };
        },

        //Binding external data
        scope: {
            user: "=", //Specify the property is two way bindings, the data could be whatever.
            getFullName: "&", //Specify the property is a function.
            favTeam: "@" //Specify the property is a literal data.
        }
    };
});

app.controller("mainExampleController", ["$scope",
    function($scope) {
        this.luffy = {
            name: "Monkey D. Luffy"
        };
        $scope.zoro = {
            name: "Roronoa Zoro"
        };
    }]);
