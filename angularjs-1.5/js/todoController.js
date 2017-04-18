app.controller("todoController", function($scope, TodoService, $http) {
    $scope.activities = TodoService.get();
    $scope.showError = false;
    $scope.teams = [];
    $scope.login_response = "";

    $scope.reset_todo = function() {
        var today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth() + 1,
            day = today.getDate(),
            hours = today.getHours(),
            minutes = today.getMinutes();

        $scope.todo = {
            description: "",
            date: new Date(year, month, day, hours, minutes)
        };
    };
    $scope.reset_todo();

    $scope.reset_login = function() {
        $scope.login = {
            email: "",
            password: ""
        };
    };
    $scope.reset_login();

    //***************************** Functions****************************
    $scope.addActivity = function() {
        if (!TodoService.isExists(this.todo)) {
            $scope.activities = TodoService.add(this.todo);
            $scope.reset_todo();
            $scope.showError = false;
        } else {
            $scope.showError = true;
        }
    };

    $scope.removeActivity = function(activity) {
        $scope.activities = TodoService.remove(activity);
    };

    $scope.clearAll = function() {
        $scope.activities = TodoService.clearAll();
    };

    $scope.loadTeams = function() {
        $http({
            method: "GET",
            url: "http://192.168.1.8:8080/data/teamsDB"
        }).then(function(res) {
            $scope.teams = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    $scope.loadTeams();

    $scope.signin = function() {
        $http({
            method: "POST",
            url: "http://192.168.1.8:8080/login",
            data: $scope.login
        }).then(function(res) {
            $scope.login_response = "Login success";
        }, function(err) {
            $scope.login_response = "Login failed";
        });
    };
});
