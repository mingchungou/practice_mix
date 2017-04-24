"use strict";

app.component("editableField", {
    templateUrl: "js/components/editableField/editableField.html",
    controller: "editableFieldController",
    bindings: {
        fieldValue: "@",
        fieldType: "@",
        onUpdate: "&"
    }
});

app.controller("editableFieldController", function() {
    var self = this;
    this.editMode = false;

    this.handleModeChange = function() {
        if ( self.editMode ) {
            self.onUpdate({value: self.fieldValue});
            self.fieldValueCopy = self.fieldValue;
        }

        self.editMode = !self.editMode;
    };

    this.reset = function() {
        self.fieldValue = self.fieldValueCopy;
        self.editMode = !self.editMode;
    };

    this.$onInit = function() {
        self.fieldValueCopy = self.fieldValue;

        if ( !self.fieldType ) {
            self.fieldType = "text";
        }
    };
});
