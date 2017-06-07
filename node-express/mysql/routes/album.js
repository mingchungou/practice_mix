
"use strict";

let express = require("express"), //Load express module.
    api = express.Router(), //Create a router api.
    albumController = require("../controllers/album"),
    multiparty = require("connect-multiparty"); //Load connect-multiparty module.

//Load middlewares
let md_auth = require("../middlewares/authentication"),
    md_upload = multiparty({uploadDir: "./uploads/albums"});


//Requests by GET method
api.get("/getAll/:artist?", md_auth.ensureAuth, albumController.getAll);
api.get("/get/:id", md_auth.ensureAuth, albumController.get);
api.get("/getImage/:file", albumController.getImage);

//Requests by POST method
api.post("/add", md_auth.ensureAuth, albumController.add);
api.post("/uploadImage/:id", [md_auth.ensureAuth, md_upload], albumController.uploadImage);

//Requests by PUT method
api.put("/update/:id", md_auth.ensureAuth, albumController.update);

//Requests by DELETE method
api.delete("/remove/:id", md_auth.ensureAuth, albumController.remove);


module.exports = api;
