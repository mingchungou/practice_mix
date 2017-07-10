
"use strict";

/*
Angular Module
- A module is a manner to group functionalities, where you can create controllers, services,
directives, components, etc.
- Second parameter of module is for adding dependencies of that module.
*/

var app = angular.module("myApp", []);


/*
Add Bootstrap to Angular
- Using this can avoid to add ng-app directive in html, because Bootstrap will add it for us.
*/

angular.element(function() {
    angular.bootstrap(document, ["myApp"]);
});



/*
Note:
- When to use Angularjs
    - If views change data of app.
    - If app consumes data from a Rest API.
    - If app needs complex logic in Javascript.
- Advantages to use Angularjs
    - Two way data bindings: thanks for this all changes from views update to model and
    upside down in real time.
- Rootscope is unique in each app and all scopes are inherited from this rootscope. Rootscope
is created when Angularjs detects a ng-app.

- ng-app - initialize Angularjs app.
- ng-controller - set a controller to a block of HTML.
- ng-init - initialize app data.
- ng-cloak - show HTML element after Angular finishes to load/create.
- ng-click - handle click event.
*/
