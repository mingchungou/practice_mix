
"use strict";

app.component("editableField", {
    templateUrl: "js/components/editableField/editableField.component.html",
    controller: "editableFieldController",
    bindings: {
        fieldValue: "@",
        fieldType: "@",
        updateLocation: "&"
    }
});

app.controller("editableFieldController", [
    function() {
        var self = this;
        this.editMode = false;

        /*
        Function for changing edit or static mode. If edit mode is on, then it also
        works as updater.
        */
        this.handleModeChange = function() {
            if (self.editMode) {
                self.updateLocation({ value: self.fieldValue });
                self.fieldValueCopy = self.fieldValue;
            }

            self.editMode = !self.editMode;
        };

        //Function for reseting location value.
        this.reset = function() {
            self.fieldValue = self.fieldValueCopy;
            self.editMode = !self.editMode;
        };

        this.$onInit = function() {
            self.fieldValueCopy = self.fieldValue;

            if (!self.fieldType) {
                self.fieldType = "text";
            }
        };
    }]);
