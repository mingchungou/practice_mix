
"use strict";

let jwt = require("jwt-simple"), //Load jwt module.
    moment = require("moment"), //Load moment module.
    secret = "secret_user_key";


//Function for creating a token based on user.
exports.createToken = user => {
    let payload = {
        sub: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        image: user.image,
        iat: moment().unix(), //Set current date
        exp: moment().add(30, "days").unix() //Set expired date
    };

    return jwt.encode(payload, secret);
};
