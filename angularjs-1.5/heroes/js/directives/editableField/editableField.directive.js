
"use strict";

app.directive("editableField", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "js/directives/editableField/editableField.directive.html",
        controllerAs: "$ctrl",
        controller: "editableFieldController",
        scope: {
            fieldValue: "@",
            fieldType: "@",
            updateLocation: "&"
        }
    };
});

app.controller("editableFieldController", ["$scope",
    function($scope) {
        var self = this;
        this.editMode = false;

        /*
        Function for changing edit or static mode. If edit mode is on, then it also
        works as updater.
        */
        this.handleModeChange = function() {
            if (self.editMode) {
                $scope.updateLocation({ value: self.fieldValue });
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
            self.fieldValue = $scope.fieldValue;
            self.fieldValueCopy = self.fieldValue;

            if (!$scope.fieldType) {
                $scope.fieldType = "text";
            }
        };
    }]);
