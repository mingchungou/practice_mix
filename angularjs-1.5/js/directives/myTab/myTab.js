"use strict";

app.directive("myTab", function() {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        templateUrl: "js/directives/myTab/myTab.html",
        controllerAs: "$ctrl",
        controller: myTabController
    };
});

function myTabController() {
    var self = this;
    this.panes = [];

    //Function for selecting a pane through click event
    this.select = function(pane) {
        angular.forEach(self.panes, function(item) {
            item.selected = false;
        });

        pane.selected = true;
    };

    //Function for adding a pane to the list
    this.addPane = function(pane) {
        if (self.panes.length === 0) {
            self.select(pane);
        }

        self.panes.push(pane);
    };
};
