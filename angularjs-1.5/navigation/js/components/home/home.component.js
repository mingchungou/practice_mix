
"use strict";

app.component("appHome", {
    templateUrl: "js/components/home/home.component.html",
    controller: "homeController"
});

app.controller("homeController", [
    function() {
        var self = this;

        this.login = function() {
            self.user = {
                name: "Monkey D. Luffy",
                nickname: "Mugiwara",
                band: "Straw Hat",
                age: 17,
                occupation: "captain"
            };

            localStorage.setItem("user-data", JSON.stringify(self.user));
        };

        this.logout = function() {
            localStorage.removeItem("user-data");
            self.user = null;
        };

        this.$onInit = function() {
            if (localStorage.getItem("user-data")) {
                self.user = JSON.parse(localStorage.getItem("user-data"));
            }
        };
    }]);
