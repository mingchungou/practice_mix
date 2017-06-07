
"use strict";

let mongoose = require("mongoose"), //Load mongoose module.
    app = require("./app");
const PORT = process.env.PORT || 9000;


//Start connection to mysql database.
mongoose.connect("mongodb://localhost:27017/mydb", (err, res) => {
	if (err) {
        throw err;
	} else {
        //Start server listener.
        app.listen(PORT, () => {
            console.log("App listening on http://localhost:" + PORT)
        });
    }
});
