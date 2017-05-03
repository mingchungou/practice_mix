"use strict";

app.component("myPane", {
    transclude: true,
    require: {
        tabsCtrl: "^myTab"
    },
    templateUrl: "js/components/myPane/myPane.html",
    controller: "myPaneController",
    bindings: {
        title: "@"
    }
});

app.controller("myPaneController", [
    function() {
        var self = this;

        this.$onInit = function() {
            self.tabsCtrl.addPane(self);
        };
    }]);
