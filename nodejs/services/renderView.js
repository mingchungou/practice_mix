
"use strict";


//Function for render paramters into html replaceable fields.
module.exports.render = (file, parameters) => {
    let indexFile = file.toString(),
        variables = indexFile.match(/[^\{\}]+(?=\})/g);

    if (parameters instanceof Map) {
        parameters.forEach((value, key) => {
            indexFile = indexFile.replace("{{" + key + "}}", value);
        });
    } else {
        for (let i in variables) {
            indexFile = indexFile.replace(
                "{{" + variables[i] + "}}",
                parameters[variables[i]]
            );
        }
    }

    return indexFile;
};
