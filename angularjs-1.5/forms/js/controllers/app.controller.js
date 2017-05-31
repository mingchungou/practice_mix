
"use strict";

app.controller("mainController", [
    function() {
        this.user = {
            name: "Ming Chung",
            password: "",
            confirm: "",
            gender: null,
            acceptC: false
        };

        this.gender = [{
            cod: "male",
            value: "Male"
        }, {
            cod: "female",
            value: "Female"
        }, {
            cod: "other",
            value: "Other"
        }];

        this.save = function(form) {
            console.log(form);
            console.log(form.confirm);
        };
    }]);
