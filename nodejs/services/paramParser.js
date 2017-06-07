
"use strict";


//Function for getting parameters sent by request.
module.exports.parse = req => {
    let parameters = {};

    if (req.url.indexOf("?") !== -1) {
        let reqParams = req.url.split("?")[1].split("&");

        for (let i in reqParams) {
            let param = reqParams[i].split("=");
            param[1] = param[1].replace("+", " ");

            parameters[param[0]] = param[1];
        }
    }

    return parameters;
};
