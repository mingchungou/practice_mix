
"use strict";

app.component("appNavbar", {
    templateUrl: "js/components/shared/navbar/navbar.component.html",
    controller: "navbarController",
    bindings: {
        selected: "<"
    }
});

app.controller("navbarController", ["$location", "$scope",
    function($location, $scope) {
        var self = this;

        //Function for checking if selected matches with option originalPath.
        this.isActive = function(originalPath) {
            return self.selected === originalPath;
        };

        this.checkAuthentication = function() {
            if (localStorage.getItem("user-data")) {
                return true;
            } else {
                return false;
            }
        };

        this.$onChanges = function(change) {
            if (change.selected) {
                self.selected = change.selected.currentValue;
            }
        };
    }]);
