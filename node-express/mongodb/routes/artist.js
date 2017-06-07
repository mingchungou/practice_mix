
"use strict";

var express = require("express"), //Load express module.
    api = express.Router(), //Create a router api.
    artistController = require("../controllers/artist"),
    multiparty = require("connect-multiparty"); //Load connect-multiparty module.

//Load middlewares
let md_auth = require("../middlewares/authentication"),
    md_upload = multiparty({uploadDir: "./uploads/artists"});


//Requests by GET method
api.get("/getAll", md_auth.ensureAuth, artistController.getAll);
api.get("/get/:id", md_auth.ensureAuth, artistController.get);
api.get("/getByPage/:page?", artistController.getByPage);
api.get("/getImage/:file", artistController.getImage);

//Requests by POST method
api.post("/add", md_auth.ensureAuth, artistController.add);
api.post("/uploadImage/:id", [md_auth.ensureAuth, md_upload], artistController.uploadImage);

//Requests by PUT method
api.put("/update/:id", md_auth.ensureAuth, artistController.update);

//Requests by DELETE method
api.delete("/remove/:id", md_auth.ensureAuth, artistController.remove);


module.exports = api;
