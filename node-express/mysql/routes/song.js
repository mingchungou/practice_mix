
"use strict";

let express = require("express"), //Load express module.
    api = express.Router(), //Create a router api.
    songController = require("../controllers/song"),
    multiparty = require("connect-multiparty"); //Load connect-multiparty module.

//Load middlewares
let md_auth = require("../middlewares/authentication"),
    md_upload = multiparty({uploadDir: "./uploads/songs"});


//Requests by GET method
api.get("/getAll/:album?", md_auth.ensureAuth, songController.getAll);
api.get("/get/:id", md_auth.ensureAuth, songController.get);
api.get("/getSong/:file", songController.getFile);

//Requests by POST method
api.post("/add", md_auth.ensureAuth, songController.add);
api.post("/uploadSong/:id", [md_auth.ensureAuth, md_upload], songController.uploadSong);

//Requests by PUT method
api.put("/update/:id", md_auth.ensureAuth, songController.update);

//Requests by DELETE method
api.delete("/remove/:id", md_auth.ensureAuth, songController.remove);


module.exports = api;
