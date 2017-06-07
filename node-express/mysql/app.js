
"use strict";

let express = require("express"), //Load express module.
    app = express(),
    bodyParser = require("body-parser"), //Load body-parser module.
    cors = require("cors"); //Load cors module.
require("body-parser-xml")(bodyParser); //Join xml parser into bodyParser.

//Loading routes
let userRoute = require("./routes/user"),
    artistRoute = require("./routes/artist"),
    albumRoute = require("./routes/album"),
    songRoute = require("./routes/song"),
    localRoute = require("./routes/local");


//Inject body parser into server.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Parse body json data.
app.use(bodyParser.xml()); //Parse body xml data.

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
app.use("/local", localRoute);


module.exports = app;
