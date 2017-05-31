
"use strict";

app.controller("ajaxController", ["ServerService",
    function(ServerService) {
        var self = this;
        this.todoList = [];
        this.order = "-activity";
        this.login = {
            name: "",
            password: ""
        };
        this.loginResponse = "";

        ServerService.getTodos(function(res) {
            self.todoList = res.data;
        });

        this.signin = function() {
            ServerService.login(self.login,
            function(res) {
                self.loginResponse = "Login success";
                self.login.name = "";
                self.login.password = "";
            }, function(err) {
                self.loginResponse = "Login failed";
            });
        };
    }]);
