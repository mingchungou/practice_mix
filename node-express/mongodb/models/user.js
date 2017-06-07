
"use strict";

let mongoose = require("mongoose"), //Load mongoose module.
    UserSchema = mongoose.Schema({ //Create user schema.
        name: String,
        username: String,
        email: String,
        password: String,
        image: String
    });


module.exports = mongoose.model("user", UserSchema);
