
"use strict";

var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", "$httpProvider",
    function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            //An path option
            .when("/home", {
                template: "<app-home></app-home>"
            })
            .when("/about", {
                /*
                Add Dom element by string
                - Here can be a string template or a function that return a string template.
                */
                template: "<app-about></app-about>",

                /*
                Add Dom element by external file
                - Here can be a string as path or a function that return the file path.
                */
                //templateUrl: "",

                //Add controller to file
                //controller: "",

                //Symbol to represent controller, can be treated as this.
                //controllerAs: "$ctrl",
            })
            .when("/service", {
                template: "<app-service></app-service>"
            })
            .when("/service/:id", {
                template: "<app-service></app-service>"
            })
            .when("/contact", {
                template: "<app-contact></app-contact>",
                resolve: {
                    //Manner to validate router path.
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 3000);
                        return delay.promise;
                    }
                }
            })
            .when("/protected", {
                template: "<app-protected></app-protected>",
                resolve: {
                    //Manner to validate router path.
                    check: function($location) {
                        if (!localStorage.getItem("user-data")) {
                            console.error("Don't have permission to access this page");
                            $location.path("/home");
                        }
                    }
                }
            })
            //Option for when requested path doesn't match with any previous options.
            .otherwise({
                //Can resend to another option.
                redirectTo: "/home"
            });

        //Interceptors execute after router events are thrown.
        $httpProvider.interceptors.push(["$location", "$q",
            function($location, $q) {
                return {
                    request: function (config) {
                        return config;
                    },
                    requestError: function(err) {
                        return $q.reject(err);
                    },
                    response: function(res) {
                        return res;
                    },
                    responseError: function(err) {
                        return $q.reject(err);
                    }
                };
            }]);
    }
]);

angular.element(function() {
    angular.bootstrap(document, ["myApp"]);
});



/*
Note:
- ng-view - place where router loads the views.
*/
