
"use strict";

/*
Angular Component
- A directive indicates to Angularjs compiler that has to asign some behaviour to
specific element.
- A directive also can contain HTML code that could be reusable.
*/

app.component("mainExample", {
    //Specify if component requires other component. Used specifically when transcluding.
    //require: "^otherDirective",

    //Specify if component wraps other elements.
    //transclude: true,

    /*
    Add Dom element by string
    - Here can be a string template or a function that return a string template.
    */
    //template: "<h1>Hi Luffy</h1>",

    /*
    Add Dom element by external file
    - Here can be a string as path or a function that return the file path.
    */
    templateUrl: "js/components/example.component.html",

    //Add controller to component
    controller: "mainExampleController",

    //Symbol to represent controller, can be treated as this.
    controllerAs: "$ctrl",

    //Binding external data
    bindings: {
        user: "=", //Specify the property is two way bindings, the data could be whatever.
        getFullName: "&", //Specify the property is a function.
        favTeam: "@", //Specify the property is a literal data.

        /*
        Specify the property is one way binding, the data could be whatever but it
        has a watcher.
        */
        notify: "<"
    }
});

app.controller("mainExampleController", ["$scope",
    function($scope) {
        this.luffy = {
            name: "Monkey D. Luffy"
        };
        $scope.zoro = {
            name: "Roronoa Zoro"
        };

        //When binding a property by "<", is able to catch changes by $onChanges function.
        this.$onChanges = function(change) {

        };
    }]);
