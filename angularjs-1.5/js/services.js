//Service is a constructor that defined a service.
//A service is a Singleton object and is reusable.
//Angular starts the Service with new, so we are able to use this

"use strict";

app.service("LocalTodoService", ["localStorageService",
    function(localStorageService) {
        this.key = "todo-list";

        if (localStorageService.get(this.key)) {
    		this.activities = localStorageService.get(this.key);
    	} else {
    		this.activities = [];
    	}

        //Function for adding new activity
        this.add = function(activity) {
    		this.activities.push(activity);
    		this.updateLocalStorage();
    		return this.get();
    	};

        //Function for editing an activity
        this.edit = function(oldAct, newAct) {
            this.activities.find(function(item) {
                if (angular.equals(item.description.toLowerCase(), oldAct.description.toLowerCase())) {
                    item.description = newAct.description;
                    item.date = newAct.date;
                }
            });
    		this.updateLocalStorage();
    		return this.get();
    	};

        //Function for updating activities list from localStorage
        this.updateLocalStorage = function() {
    		localStorageService.set(this.key, this.activities);
    	};

        //Function for getting activities list
        this.get = function() {
    		return this.activities;
    	};

        //Function for checking if activity exists within the list
        this.isExists = function(activity) {
            var exist = this.activities.find(function(item) {
                return angular.equals(item.description.toLowerCase(), activity.description.toLowerCase());
            });
            return exist ? true : false;
        };

        //Function for removing an activity
        this.remove = function(activity) {
            this.activities = this.activities.filter(function(item) {
    			return !angular.equals(activity, item);
    		});
    		this.updateLocalStorage();
    		return this.get();
        };

        //Function for removing all activities
        this.clearAll = function() {
    		this.activities = [];
    		this.updateLocalStorage();
    		return this.get();
    	};
    }]);

app.service("TodoHandlerService", ["$http",
    function($http) {
        this.baseUrl = "http://localhost/practice_mix/angularjs-1.5/server/server.php/";

        //Function for loading all todos
        this.loadAllTodo = function(successCallback, errorCallback) {
            this.request("GET",
                this.baseUrl + "getTodo",
                {},
                successCallback,
                errorCallback);
        };

        //Function for making ajax request
        this.request = function(method, url, data, successCallback, errorCallback) {
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
    }]);
