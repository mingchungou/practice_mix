
"use strict";

app.component("heroList", {
    templateUrl: "js/components/heroList/heroList.component.html",
    controller: "heroListController",
});

app.controller("heroListController", [
    function() {
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

        //Function for updating a hero information.
        this.updateHero = function(hero, prop, value) {
            hero[prop] = value;
        };

        //Function for deleting a hero.
        this.deleteHero = function(hero) {
            self.list = self.list.filter(function(item) {
                return !angular.equals(hero, item);
            });
        };
    }]);
