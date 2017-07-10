
"use strict";

app.component("appProtected", {
    templateUrl: "js/components/protected/protected.component.html",
    controller: "protectedController"
});

app.controller("protectedController", [
    function() {
        var self = this;

        this.$onInit = function() {
            self.user = JSON.parse(localStorage.getItem("user-data"));
        };
    }]);
