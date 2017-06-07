
"use strict";

let express = require("express"), //Load express module.
    app = express(),
    bodyParser = require("body-parser"), //Load body-parser module.
    cors = require("cors"); //Load cors module.

//Loading routes
let userRoute = require("./routes/user"),
    artistRoute = require("./routes/artist"),
    albumRoute = require("./routes/album"),
    songRoute = require("./routes/song");


//Inject body parser into server.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Parse body json data.

//Inject cors into server.
app.use(cors());

//Config response header.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Bind routes to server
app.use("/user", userRoute);
app.use("/artist", artistRoute);
app.use("/album", albumRoute);
app.use("/song", songRoute);


module.exports = app;
