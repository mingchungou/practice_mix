//Directives allow to handle and reuse html code

/*Different ways to add directives
<hello-world />
<hello-world></hello-world>
<hello:world></hello:world>
<div hello-world></div>
<div hello:world></div>*/

app.directive("helloWorld", function() {
    return {
        restrict: "AECM", //A: as attribute, E: as html element, C: as class, M: as comment
        replace: true, //Specify if should replace html tag after attaching the directive
        template: "<h1 style='color:{{color}}; transition: all 0.5s ease;'>Hello World!</h1>", //Load string template
        //templateUrl: //Load external template file
        link: function($scope, $element, $attrs) {
            //Used mainly for attaching DOM events, but if there is set compile function, this won't be called
            console.log($scope);
        },
        compile: function($element, $attrs, $transclude) {
            return {
                pre: function preLink($scope, $element, $attrs) {
                    //Execute before child elements are linked, so it is not safe to make DOM transformation
                    console.log($scope);
                },
                post: function postLink($scope, $element, $attrs) {
                    //Execute after child elements are linked, so it is safe to make DOM transformation
                    console.log($scope);
                }
            };
        },
        controller: function($scope, $element, $attrs, $transclude) {
            //controller is called before compile
            console.log($scope);
        }
    };
});
