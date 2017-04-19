app.component("myTab", {
    transclude: true,
    templateUrl: "js/components/myTab/myTab.html",
    controller: "myTabController"
});

app.controller("myTabController", function() {
    var self = this;
    this.panes = [];

    this.select = function(pane) {
        angular.forEach(self.panes, function(item) {
            item.selected = false;
        });
        
        pane.selected = true;
    };

    this.addPane = function(pane) {
        if (self.panes.length === 0) {
            self.select(pane);
        }

        self.panes.push(pane);
    };
});
