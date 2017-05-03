"use strict";

app.component("heroList", {
    templateUrl: "js/components/heroList/heroList.html",
    controller: "heroListController",
});

app.controller("heroListController", [
    function() {
        var self = this;
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

        this.updateHero = function(hero, prop, value) {
            hero[prop] = value;
        };

        this.deleteHero = function(hero) {
            self.list = self.list.filter(function(item) {
                return !angular.equals(hero, item);
            });
        };
    }]);
