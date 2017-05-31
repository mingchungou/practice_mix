
"use strict";

app.controller("filtersController", [
    function() {
        this.name = "Monkey D. Luffy";
        this.people = [{
            name: "Roronoa Zoro",
            location: "Shimotsuki"
        }, {
            name: "Sanji",
            location: "Baratie"
        }, {
            name: "Nami",
            location: "Cocoyasi Villa"
        }];
        this.amount = 1234.56;
        this.number = 1234.56789;
        this.today = new Date();
        this.letters = "abcdefghijklmnopqrstuvwxyz";
        this.names = ["María", "Pamela", "Susana", "Antonia", "Andrea", "Jessica"];
        this.phrase = "filters can be added in angularjs";
        this.password = "12345678";
    }]);
