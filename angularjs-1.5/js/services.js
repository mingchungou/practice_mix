//Service is a constructor that defined a service.
//A service is a Singleton object and is reusable.
//Angular starts the Service with new, so we are able to use this

"use strict";

app.service("todoService", ["localStorageService",
    function(localStorageService) {
        this.key = "todo-list";

        if (localStorageService.get(this.key)) {
    		this.activities = localStorageService.get(this.key);
    	} else {
    		this.activities = [];
    	}

        this.add = function(activity) {
    		this.activities.push(activity);
    		this.updateLocalStorage();
    		return this.get();
    	};

        this.updateLocalStorage = function() {
    		localStorageService.set(this.key, this.activities);
    	};

        this.get = function() {
    		return this.activities;
    	};

        this.isExists = function(activity) {
            var exist = this.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });
            return exist ? true : false;
        };

        this.remove = function(activity) {
            this.activities = this.activities.filter(function(item) {
    			return !angular.equals(activity, item);
    		});
    		this.updateLocalStorage();
    		return this.get();
        };

        this.clearAll = function() {
    		this.activities = [];
    		this.updateLocalStorage();
    		return this.get();
    	};
    }]);
