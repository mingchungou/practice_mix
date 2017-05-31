
"use strict";

app.directive("ngPassword", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function($scope, $element, $attrs, $model) {
            //For DOM to model validation
            $model.$parsers.unshift(function(value) {
                var valid = value === $scope.ngPassword;
                $model.$setValidity("password", valid);
                return valid ? value : undefined;
            });

            $scope.$watch("ngPassword", function(newValue, oldValue) {
                if ($model.$modelValue) {
                    $model.$setValidity("password", newValue === $model.$modelValue);
                }
            });

            //For model to DOM validation
            $model.$formatters.unshift(function(value) {
                $model.$setValidity("password", value === $scope.ngPassword);
                return value;
            });
        },
        scope: {
            ngPassword: "="
        }
    };
});
