
"use strict";

var jwt = require("jwt-simple"), //Load jwt module.
    moment = require("moment"), //Load moment module.
    secret = "secret_user_key";


//Middleware for checking the request header contains authorization(token).
exports.ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(403).send({message: "The request header doesn't have authentication"});
    } else {
        let payload;
        try {
            let token = req.headers.authorization.replace(/['"]+/g, "");
            payload = jwt.decode(token, secret);

            //Checking the exp is expired by verifying wether today is higher than exp date/
            if (payload.exp <= moment().unix()) {
                res.status(401).send({message: "Token has expired"});
            }
        } catch (ex) {
            res.status(404).send({message: "Token is not valid"});
        }

        req.user = payload;
        next();
    }
};
