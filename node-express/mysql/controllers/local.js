
 "use strict";

let fs = require("fs"), //Load fs module.
    path = require("path"), //Load path module.
	xml2js = require("xml2js"); //Load xml2js module.


//Function for loading JSON file.
let loadJSONFile = (req, res) => {
    fs.readFile(path.resolve("./localData/myJson.json"), "utf8", function(err, file) {
        if (err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).send({result: JSON.parse(file)});
        }
	});
};

//Function for loading XML file.
let loadXMLFile = (req, res) => {
    fs.readFile(path.resolve("./localData/myXml.xml"), "utf8", function(err, file) {
        if (err) {
            res.status(500).send({message: err});
        } else {
            xml2js.parseString(file, function(err, jsonFile) {
				if (err) {
				    res.status(500).send({message: err});
				} else {
                    res.status(200).send({result: jsonFile});
                }
			});
        }
	});
};


module.exports = {
    loadJSONFile,
    loadXMLFile
};
