
"use strict";

/*
Angular Factory
- A factory is an initialization of a service.
- A service is a Singleton object and is reusable.
- At the end should return the object/function that contains the service functionality.
*/

app.factory("LocalTodoService", ["localStorageService",
    function(localStorageService) {
        var todoservice = {
            key: "todo-list"
        };

        if (localStorageService.get(todoservice.key)) {
    		todoservice.activities = localStorageService.get(todoservice.key);
    	} else {
    		todoservice.activities = [];
    	}

        //Function for adding new activity to activity list.
        todoservice.add = function(activity) {
    		todoservice.activities.push(activity);
    		todoservice.updateLocalStorage();
    	};

        //Function for editing an activity in stock within activity list.
        todoservice.edit = function(prevActDescription, newAct) {
            var isUpdated = false;

            todoservice.activities.find(function(item) {
                if (angular.equals(item.description.toLowerCase(), prevActDescription.toLowerCase())) {
                    item.description = newAct.description;
                    item.date = newAct.date;
                    isUpdated = true;
                    return;
                }
            });

            if (!isUpdated) {
                todoservice.add(newAct);
            }

    		todoservice.updateLocalStorage();
    	};

        //Function for updating activity list from localStorage.
        todoservice.updateLocalStorage = function() {
    		localStorageService.set(todoservice.key, todoservice.activities);
    	};

        //Function for getting activity list.
        todoservice.get = function() {
    		return todoservice.activities;
    	};

        //Function for checking if activity exists within the activity list.
        todoservice.isExists = function(activity) {
            var exist = todoservice.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });
            return exist ? true : false;
        };

        //Function for getting the index of an activity within activity list.
        todoservice.indexOf = function(activity) {
            var i = 0;

            while (i < todoservice.activities.length) {
                if (angular.equals(todoservice.activities[i].description.toLowerCase(), activity.description.toLowerCase())) {
                    return i;
                }

                i++;
            }

            return -1;
        };

        //Function for removing an activity from activity list.
        todoservice.remove = function(activity) {
            todoservice.activities.splice(todoservice.indexOf(activity), 1);
            todoservice.updateLocalStorage();
        };

        //Function for emptying activity list.
        todoservice.clearAll = function() {
    		todoservice.activities = [];
    		todoservice.updateLocalStorage();
    		return todoservice.get();
    	};

        return todoservice;
    }]);
