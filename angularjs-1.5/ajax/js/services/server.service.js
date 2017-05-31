
"use strict";

app.service("ServerService", ["$http",
    function($http) {
        this.baseUrl = "../server/server.php/";

        //Function for making ajax request.
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

        //Function for loading all todos.
        this.getTodos = function(successCallback, errorCallback) {
            /*this.request("GET",
                this.baseUrl + "getTodo",
                {},
                successCallback,
                errorCallback);*/

            $http.get(this.baseUrl + "getTodo").then(successCallback, errorCallback);
        };

        //Function for verifying the user exists.
        this.login = function(userInfo, successCallback, errorCallback) {
            /*this.request("POST",
                this.baseUrl + "login",
                JSON.stringify(userInfo),
                successCallback,
                errorCallback);*/

            $http.post(this.baseUrl + "login", JSON.stringify(userInfo))
                .success(successCallback)
                .error(errorCallback);
        };
    }]);
