
"use strict";

let express = require("express"), //Load express module.
    api = express.Router(), //Create a router api.
    localController = require("../controllers/local");


//Requests by GET method
api.get("/json", localController.loadJSONFile);
api.get("/xml", localController.loadXMLFile);


module.exports = api;
