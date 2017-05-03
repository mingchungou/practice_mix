"use strict";

app.component("heroDetail", {
    templateUrl: "js/components/heroDetail/heroDetail.html",
    controller: "heroDetailController",
    bindings: {
        hero: "=",
        onUpdate: "&",
        onDelete: "&"
    }
});

app.controller("heroDetailController", [
    function() {
        var self = this;

        this.update = function(prop, value) {
            self.onUpdate({
                hero: self.hero,
                prop: prop,
                value: value
            });
        };
    }]);
