
"use strict";


//Function for render paramters into html replaceable fields.
module.exports.render = (file, parameters) => {
    let indexFile = file.toString(),
        variables = indexFile.match(/[^\{\}]+(?=\})/g);

    if (parameters instanceof Map) {
        for (let i in variables) {
            indexFile = indexFile.replace("{{" + variables[i] + "}}", parameters.get(variables[i]));
        }
    } else {
        for (let i in variables) {
            indexFile = indexFile.replace("{{" + variables[i] + "}}", parameters[variables[i]]);
        }
    }

    return indexFile;
};
