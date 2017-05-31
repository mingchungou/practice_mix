"use strict";

app.component("myTab", {
    transclude: true,
    templateUrl: "js/components/myTab/myTab.component.html",
    controller: "myTabController"
});

app.controller("myTabController", [
    function() {
        var self = this;
        this.panes = [];

        //Function for selecting a pane through click event.
        this.select = function(pane) {
            angular.forEach(self.panes, function(item) {
                item.selected = false;
            });

            pane.selected = true;
        };

        //Function for adding a pane to the list.
        this.addPane = function(pane) {
            if (self.panes.length === 0) {
                self.select(pane);
            }

            self.panes.push(pane);
        };
    }]);
