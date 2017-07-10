
"use strict";

app.component("multipleSlot", {
    transclude: {
        title: "h3",
        content: "p"

        /*title: "?paneTitle",
        content: "paneContent"*/
    },
    templateUrl: "js/components/multiple-slot/multiple-slot.component.html"
});
