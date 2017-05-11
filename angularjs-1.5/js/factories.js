//Factory is an initialization of a service.
//A service is a Singleton object and is reusable.
//At the end should return the object that contains the service

"use strict";

/*app.factory("LocalTodoService", ["localStorageService",
    function(localStorageService) {
        var todoservice = {
            key: "todo-list"
        };

        if (localStorageService.get(todoservice.key)) {
    		todoservice.activities = localStorageService.get(todoservice.key);
    	} else {
    		todoservice.activities = [];
    	}

        //Function for adding new activity
        todoservice.add = function(activity) {
    		todoservice.activities.push(activity);
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        //Function for editing an activity
        todoservice.edit = function(oldAct, newAct) {
            todoservice.activities.find(function(item) {
                if (angular.equals(item.description.toLowerCase(), oldAct.description.toLowerCase())) {
                    item.description = newAct.description;
                    item.date = newAct.date;
                }
            });
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        //Function for updating activities list from localStorage
        todoservice.updateLocalStorage = function() {
    		localStorageService.set(todoservice.key, todoservice.activities);
    	};

        //Function for getting activities list
        todoservice.get = function() {
    		return todoservice.activities;
    	};

        //Function for checking if activity exists within the list
        todoservice.isExists = function(activity) {
            var exist = todoservice.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });
            return exist ? true : false;
        };

        //Function for removing an activity
        todoservice.remove = function(activity) {
            todoservice.activities = todoservice.activities.filter(function(item) {
    			return !angular.equals(activity, item);
    		});
    		todoservice.updateLocalStorage();
    		return todoservice.get();
        };

        //Function for removing all activities
        todoservice.clearAll = function() {
    		todoservice.activities = [];
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        return todoservice;
    }]);*/

app.factory("AuthenticationService", ["$http",
    function($http) {
        var authentication = {
            baseUrl: "http://localhost/practice_mix/angularjs-1.5/server/server.php/",
            userInfo: {
                name: "",
                password: ""
            }
        };

        //Function for making ajax request
        authentication.request = function(method, url, data, successCallback, errorCallback) {
            $http({
                method: method,
                url: url,
                data: data
            }).then(function(res) {
                if (successCallback) {
                    successCallback(res);
                }
            }, function(err) {
                console.log(err);
                if (errorCallback) {
                    errorCallback(err);
                }
            });
        };

        //Function for verifying the user exists
        authentication.login = function(successCallback, errorCallback) {
            authentication.request("POST",
                authentication.baseUrl + "login",
                JSON.stringify(authentication.userInfo),
                successCallback,
                errorCallback);
        };

        //Function for clearing userInfo attributes
        authentication.clear = function() {
            authentication.userInfo.name = "";
            authentication.userInfo.password = "";
        };

        return authentication;
    }]);
