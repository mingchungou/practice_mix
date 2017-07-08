
"use strict";

let http = require("http"), //Load http module.
    fs = require("fs"), //File handler module.
    paramParser = require("./services/paramParser"),
    renderView = require("./services/renderView");


//This is how to load a file synchronous.
/*let indexHTML = fs.readFileSync("./index.html");

//Create a simple server
http.createServer((req, res) => {
    //This is how to send back a response.
    res.write(indexHTML);
    res.end();
}).listen(9000);*/


//This is how to load a file asynchronous.
http.createServer((req, res) => {
    let staticDatas = new Map([["name", "World"]]),
        parameters = paramParser.parse(req);

    fs.readFile("./index.html", (err, file) => {
        //Inject data to file dynamically
        let indexFile = renderView.render(
            file,
            (Object.getOwnPropertyNames(parameters).length > 0) ? parameters : staticDatas
        );

        //Set response data - One by one
        /*res.setHeader("Content-Type", "text/html"); //Set header of response.
        res.statusCode = 200; //Set status code to response.
        res.statusMessage = "OK"; //Set status message to response*/

        //Set response data - All in one
        res.writeHead(200, "OK", {
            "Content-Type": "text/html",
            "Content-Length": Buffer.byteLength(indexFile)
        });

        res.write(indexFile); //Write body response.
        res.end(); //Finish the response.
    });
}).listen(9000);
