
"use strict";

var express = require("express"), //Load express module.
    api = express.Router(), //Create a router api.
    userController = require("../controllers/user"),
    multiparty = require("connect-multiparty"); //Load connect-multiparty module.

//Load middlewares
let md_auth = require("../middlewares/authentication"),
    md_upload = multiparty({uploadDir: "./uploads/users"});


//Requests by GET method
api.get("/getImage/:file", userController.getImage);

//Requests by POST method
api.post("/add", userController.add);
api.post("/login", userController.login);
api.post("/uploadImage/:id", [md_auth.ensureAuth, md_upload], userController.uploadImage);

//Requests by PUT method
api.put("/update/:id", md_auth.ensureAuth, userController.update);


module.exports = api;
