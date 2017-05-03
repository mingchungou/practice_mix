//Controllers allow us to implement the logic to block of html, like handling their events or functions

app.controller("todoController", ["$scope", "todoService", "$http",
    function($scope, todoService, $http) {
        var self = this,
            IP_SERVER = "http://192.168.1.9:8080";

        //Todo logic
        this.activities = todoService.get();
        this.showError = false;

        this.reset_todo = function() {
            var today = new Date(),
                year = today.getFullYear(),
                month = today.getMonth() + 1,
                day = today.getDate(),
                hours = today.getHours(),
                minutes = today.getMinutes();

            self.todo = {
                description: "",
                date: new Date(year, month, day, hours, minutes)
            };
        };
        this.reset_todo();

        this.addActivity = function() {
            if (!todoService.isExists(self.todo)) {
                self.activities = todoService.add(self.todo);
                self.reset_todo();
                self.showError = false;
            } else {
                self.showError = true;
            }
        };

        this.removeActivity = function(activity) {
            self.activities = todoService.remove(activity);
        };

        this.clearAll = function() {
            self.activities = todoService.clearAll();
        };

        //Ajax
        this.todoList = [];
        this.loginResponse = "";
        this.order = "-activity";

        this.reset_login = function() {
            self.login = {
                email: "",
                password: ""
            };
        };
        this.reset_login();

        (function() {
            $http({
                method: "GET",
                url: IP_SERVER + "/data/activities/db"
            }).then(function(res) {
                self.todoList = res.data;
            }, function(err) {
                console.log(err);
            });
        })();

        this.signin = function() {
            $http({
                method: "POST",
                url: IP_SERVER + "/login",
                data: self.login
            }).then(function(res) {
                self.loginResponse = "Login success";
                self.reset_login();
            }, function(err) {
                self.loginResponse = "Login failed";
            });
        };
    }]);
