
"use strict";

let mysql = require("mysql"), //Load MySql module.
    connection = mysql.createConnection({ //Create a connection to MySql
        host: "192.168.1.8",
        user: "mingchung",
        password: "admin",
        database: "mydb"
    });


module.exports = connection;
