
"use strict";

/*
Angular Service
- A service is a constructor that defines a service.
- A service is a Singleton object and is reusable.
- Angularjs starts the service with new, so we are abling to use this.
*/

app.service("LocalTodoService", ["localStorageService",
    function(localStorageService) {
        this.key = "todo-list";

        if (localStorageService.get(this.key)) {
    		this.activities = localStorageService.get(this.key);
    	} else {
    		this.activities = [];
    	}

        //Function for adding new activity to activity list.
        this.add = function(activity) {
    		this.activities.push(activity);
    		this.updateLocalStorage();
    	};

        //Function for editing an activity in stock within activity list.
        this.edit = function(prevActDescription, newAct) {
            var isUpdated = false;

            this.activities.find(function(item) {
                if (angular.equals(item.description.toLowerCase(), prevActDescription.toLowerCase())) {
                    item.description = newAct.description;
                    item.date = newAct.date;
                    isUpdated = true;
                    return;
                }
            });

            if (!isUpdated) {
                this.add(newAct);
            }

    		this.updateLocalStorage();
    	};

        //Function for updating activity list from localStorage.
        this.updateLocalStorage = function() {
    		localStorageService.set(this.key, this.activities);
    	};

        //Function for getting activity list.
        this.get = function() {
    		return this.activities;
    	};

        //Function for checking if activity exists within the activity list.
        this.isExists = function(activity) {
            var exist = this.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });

            return exist ? true : false;
        };

        //Function for getting the index of an activity within activity list.
        this.indexOf = function(activity) {
            var i = 0;

            while (i < this.activities.length) {
                if (angular.equals(this.activities[i].description.toLowerCase(), activity.description.toLowerCase())) {
                    return i;
                }

                i++;
            }

            return -1;
        };

        //Function for removing an activity from activity list.
        this.remove = function(activity) {
            this.activities.splice(this.indexOf(activity), 1);
            this.updateLocalStorage();
        };

        //Function for emptying activity list.
        this.clearAll = function() {
    		this.activities = [];
    		this.updateLocalStorage();
    		return this.get();
    	};
    }]);
