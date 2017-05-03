//Factory is an initialization of a service.
//A service is a Singleton object and is reusable.
//At the end should return the object that contains the service

"use strict";

app.factory("todoService", ["localStorageService",
    function(localStorageService) {
        var todoservice = {
            key: "todo-list"
        };

        if (localStorageService.get(todoservice.key)) {
    		todoservice.activities = localStorageService.get(todoservice.key);
    	} else {
    		todoservice.activities = [];
    	}

        todoservice.add = function(activity) {
    		todoservice.activities.push(activity);
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        todoservice.updateLocalStorage = function() {
    		localStorageService.set(todoservice.key, todoservice.activities);
    	};

        todoservice.get = function() {
    		return todoservice.activities;
    	};

        todoservice.isExists = function(activity) {
            var exist = todoservice.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });
            return exist ? true : false;
        };

        todoservice.remove = function(activity) {
            todoservice.activities = todoservice.activities.filter(function(item) {
    			return !angular.equals(activity, item);
    		});
    		todoservice.updateLocalStorage();
    		return todoservice.get();
        };

        todoservice.clearAll = function() {
    		todoservice.activities = [];
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        return todoservice;
    }]);
    
