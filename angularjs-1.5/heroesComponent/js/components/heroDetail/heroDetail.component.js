
"use strict";

app.component("heroDetail", {
    templateUrl: "js/components/heroDetail/heroDetail.component.html",
    controller: "heroDetailController",
    bindings: {
        hero: "=",
        updateLocation: "&",
        deleteHero: "&"
    }
});

app.controller("heroDetailController", [
    function() {
        var self = this;

        //Function for calling parent update function.
        this.ownUpdateLocation = function(prop, value) {
            self.updateLocation({
                prop: prop,
                value: value
            });
        };
    }]);
