
"use strict";

/*
Angular Controller
- A controller allows us to handle property and methods of a html block.
- $scope is a binding between view and a controller, it contains properties and methods.
- Dependency injection deals with how the components get their dependencies.
*/

app.controller("mainController", ["$scope", "$timeout", "$document",
    function($scope, $timeout, $document) {
        var self = this;
        this.luffy = {
            name: "Monkey D. Luffy"
        };
        $scope.zoro = {
            name: "Roronoa Zoro"
        };


        //By using Angular timeout, it invokes the function within $apply
        /*$timeout(function() {
            $scope.zoro.name = "Vinsmoke Sanji";
        }, 2000);*/


        /*
        Angular $digest
        - $digest goes through $scope properties and checks if any property has been changed.
        When detecting something has been changed, launch the function registered in $watch.
        */

        /*setTimeout(function() {
            $scope.zoro.name = "Vinsmoke Sanji";
            $scope.$digest(); //It works but this is not correct
        }, 2000);*/


        /*
        Angular $apply
        - $apply executes the changes and then calling $digest automatically.
        */

        setTimeout(function() {
            $scope.$apply(function() {
                $scope.zoro.name = "Vinsmoke Sanji";
            });
        }, 2000);


        /*
        Angular $watch
        - $watch adds a listener to a property of $scope and when that property is changed, then
        $watch callback also is called. That callback brings us the new and old values of that
        property.
        */

        $scope.changeName = function() {
            $scope.name = ($scope.name === "Ming Chung") ? "Ou Ming" : "Ming Chung";
        };

        $scope.changeNick = function() {
            self.nickname = (self.nickname === "Mugiwara") ? "Straw Hat" : "Mugiwara";
        };

        $scope.$watch("name", function(newValue, oldValue) {
            var newMessage = "The name has been changed to " + newValue;
            $document[0].querySelector(".message").innerHTML = newMessage;
        });

        $scope.$watch("$ctrl.nickname", function(newValue, oldValue) {
            var newMessage = "The nickname has been changed to " + newValue;
            $document[0].querySelector(".nick-message").innerHTML = newMessage;
        });
    }]);
