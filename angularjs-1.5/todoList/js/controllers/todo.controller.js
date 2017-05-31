
"use strict";

app.controller("localTodoController", ["LocalTodoService",
    function(LocalTodoService) {
        var self = this;
        this.activities = LocalTodoService.get();
        this.selectAct = "";
        this.isError = false;
        this.isEditing = false;
        this.todo = {
            description: "",
            date: setDate()
        };

        //Function for creating an Date object.
        function setDate(specific) {
            if (!specific) {
                var today = new Date();
            } else {
                var today = new Date(specific);
            }

            return new Date(today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes()
            );
        };

        //Function for setting datas to todo model.
        function setTodo(description, date) {
            self.todo = {
                description: description,
                date: date
            };
        };

        /*
        Function for checking if current edited todo exists, if so, display an error and
        if not, decide if call edit or add function from todo service.
        */
        this.addActivity = function() {
            if (!LocalTodoService.isExists(self.todo)) {
                if (self.isEditing) {
                    LocalTodoService.edit(self.selectAct, self.todo);
                } else {
                    LocalTodoService.add(self.todo);
                }

                setTodo("", setDate());
                self.isError = false;
            } else {
                self.isError = true;
            }
        };

        //Function for calling remove function from todo service.
        this.removeActivity = function(activity) {
            LocalTodoService.remove(activity);
        };

        //Function for calling clearAll function from todo service.
        this.clearAll = function() {
            self.activities = LocalTodoService.clearAll();
        };

        //Function for changing from current state to edit state.
        this.editActivity = function(activity) {
            setTodo(activity.description, setDate(activity.date));
            self.selectAct = activity.description;
            self.isEditing = true;
        };
    }]);
