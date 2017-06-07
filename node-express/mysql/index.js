
"use strict";

let app = require("./app"),
    mysql = require("./services/mysql-handler");
const PORT = process.env.PORT || 9000;


//Start connection to mysql database.
mysql.connect(err => {
	if (err) {
        throw err;
	} else {
        //Start server listener.
        app.listen(PORT, () => {
            console.log("App listening on http://localhost:" + PORT)
        });
    }
});
