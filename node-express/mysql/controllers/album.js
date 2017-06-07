
"use strict";

let mysql = require("../services/mysql-handler"),
    mixins = require("../services/mixins"),
    uploadedPath = "./uploads/albums/";


//Function for adding an album.
let add = (req, res) => {
    let {title, description, year, artistID} = req.body

    if (!title || !description || !year || !artistID) {
        res.status(200).send({message: "Need to pass album: title, description, year and artistID"});
    } else {
        let statement = "insert into albums (title, description, year, artistID) values (?, ?, ?, ?)",
            values = [title, description, year, artistID];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for getting all albums of specific artist or entire albums.
let getAll = (req, res) => {
    let statement,
        values = [];

    if (!req.params.artist) {
        statement = "select * from albums order by title";
    } else {
        statement = "select * from albums where artistID = ? order by year";
        values = [req.params.artist];
    }

    mysql.query(statement, values, (err, rows, fields) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (rows.length === 0) {
            res.status(404).send({message: "Album is not found"});
        } else {
            res.status(200).send({albums: rows});
        }
    });
};

//Function for getting an album by id, used locally.
let getAlbum = id => {
    return new Promise((resolve, reject) => {
        let statement = "select * from albums where id = ?";

        mysql.query(statement, [id], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    });
};

//Function for getting an album by id.
let get = (req, res) => {
    getAlbum(req.params.id).then((album) => {
        if (!album) {
            res.status(404).send({message: "Album is not found"});
        } else {
            res.status(200).send({album});
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for updating an album data by id.
let update = (req, res) => {
    let {title, description, year} = req.body

    if (!title || !description || !year) {
        res.status(200).send({message: "Need to pass album: title, description and year"});
    } else {
        let statement = "update albums set title = ?, description = ?, year = ? where id = ?",
            values = [title, description, year, req.params.id];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for removing an album by id.
let remove = (req, res) => {
    getAlbum(req.params.id).then((album) => {
        if (!album) {
            res.status(404).send({message: "Album is not found"});
        } else {
            //Get songs of album.
            let statement = "select * from songs where albumID = ?";

            mysql.query(statement, [album.id], (err, rows, fields) => {
                if (err) {
                    res.status(500).send({message: err});
                } else {
                    statement = "delete from albums where id = ?";

                    mysql.query(statement, [album.id], (err2, rows2, fields2) => {
                        if (err2) {
                            res.status(500).send({message: err2});
                        } else {
                            if (album.image) {
                                mixins.removeFile(uploadedPath + album.image)
                            }

                            //Remove deleted song images.
                            for (let i in rows) {
                                if (rows[i].file) {
                                    mixins.removeFile("./uploads/songs/" + rows[i].file);
                                }
                            }

                            res.status(200).send({album});
                        }
                    });
                }
            });
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for uploading an image to the album by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        getAlbum(req.params.id).then((album) => {
            if (!album) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "Album is not found"});
            } else {
                let statement = "update albums set image = ? where id = ?",
                    values = [imageFile, album.id];

                mysql.query(statement, values, (err, rows, fields) => {
                    if (err) {
                        mixins.removeFile(uploadedPath + imageFile);
                        res.status(500).send({message: err});
                    } else {
                        if (album.image) {
                            mixins.removeFile(uploadedPath + album.image);
                        }

                        res.status(200).send({
                            image: imageFile,
                            result: rows
                        });
                    }
                });
            }
        }, err => {
            mixins.removeFile(uploadedPath + imageFile);
            res.status(500).send({message: err});
        });
    }
};

//Function for loading an image.
let getImage = (req, res) => {
    mixins.getFile(req, res, uploadedPath);
};


module.exports = {
    add,
    getAll,
    get,
    update,
    remove,
    uploadImage,
    getImage
};
