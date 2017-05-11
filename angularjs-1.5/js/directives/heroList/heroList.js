"use strict";

app.directive("heroList", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "js/directives/heroList/heroList.html",
        controllerAs: "$ctrl",
        controller: heroListController
    };
});

function heroListController() {
    var self = this;

    //Hero list
    this.list = [{
        name: "Superman",
        location: "Kansas"
    }, {
        name: "Batman",
        location: "Wayne Manor"
    }, {
        name: "Spiderman",
        location: "Forest Hills"
    }, {
        name: "Hulk",
        location: "New York"
    }];

    //Function for updating a hero information
    this.updateHero = function(hero, prop, value) {
        hero[prop] = value;
    };

    //Function for deleting a hero
    this.deleteHero = function(hero) {
        self.list = self.list.filter(function(item) {
            return !angular.equals(hero, item);
        });
    };
};
