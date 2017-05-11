//Controllers allow us to implement the logic to block of html, like handling their events or functions

"use strict";

app.controller("localTodoController", ["LocalTodoService",
    function(LocalTodoService) {
        var self = this;
        this.selectedActivity = null;
        this.activities = LocalTodoService.get();
        this.showError = false;
        this.todo = {
            description: "",
            date: setDate()
        };

        function setDate (specific) {
            if (!specific) {
                var today = new Date();
            } else {
                var today = new Date(specific);
            }

            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
        };

        this.addActivity = function() {
            if (self.selectedActivity) {
                LocalTodoService.edit(self.selectedActivity, self.todo);
                self.selectedActivity = null;
                self.todo = {
                    description: "",
                    date: setDate()
                };
            } else {
                if (!LocalTodoService.isExists(self.todo)) {
                    self.activities = LocalTodoService.add(self.todo);
                    self.todo = {
                        description: "",
                        date: setDate()
                    };
                    self.showError = false;
                } else {
                    self.showError = true;
                }
            }
        };

        this.removeActivity = function(activity) {
            self.activities = LocalTodoService.remove(activity);
        };

        this.clearAll = function() {
            self.activities = LocalTodoService.clearAll();
        };

        this.editActivity = function(activity) {
            self.selectedActivity = activity;
            self.todo.description = activity.description;
            self.todo.date = setDate(activity.date);
            $("button[type='submit']").text("Save");
        }
    }]);

app.controller("todoTableController", ["TodoHandlerService",
    function(TodoHandlerService) {
        var self = this;
        this.todoList = [];
        this.order = "-activity";
        TodoHandlerService.loadAllTodo(function(res) {
            self.todoList = res.data;
        });
    }]);

app.controller("loginController", ["AuthenticationService",
    function(AuthenticationService) {
        var self = this;
        this.login = AuthenticationService.userInfo;
        this.loginResponse = "";
        this.signin = function() {
            AuthenticationService.login(function(res) {
                self.loginResponse = "Login success";
                AuthenticationService.clear();
            }, function(err) {
                self.loginResponse = "Login failed";
            });
        };
    }]);
