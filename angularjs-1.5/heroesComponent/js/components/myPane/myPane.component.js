"use strict";

app.component("myPane", {
    transclude: true,
    require: {
        tabsCtrl: "^myTab"
    },
    templateUrl: "js/components/myPane/myPane.component.html",
    controller: "myPaneController",
    bindings: {
        title: "@"
    }
});

app.controller("myPaneController", [
    function() {
        var self = this;

        this.$onInit = function() {
            //Accessing parent addPane function.
            self.tabsCtrl.addPane(self);
        };
    }]);
