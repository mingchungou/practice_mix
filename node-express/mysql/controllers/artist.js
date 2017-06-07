
"use strict";

let mysql = require("../services/mysql-handler"),
    mixins = require("../services/mixins"),
    uploadedPath = "./uploads/artists/";


//Function for adding an artitst.
let add = (req, res) => {
    let {name, description} = req.body

    if (!name || !description) {
        res.status(200).send({message: "Need to pass artist: name and description"});
    } else {
        let statement = "insert into artists (name, description) values (?, ?)",
            values = [name, description];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for getting all artists.
let getAll = (req, res) => {
    let statement = "select * from artists";

    mysql.query(statement, (err, rows, fields) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (rows.length === 0) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({artists: rows});
        }
    });
};

//Function for getting an artist by id, used locally.
let getArtist = id => {
    return new Promise((resolve, reject) => {
        let statement = "select * from artists where id = ?";

        mysql.query(statement, [id], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    });
};

//Function for getting an artist by id.
let get = (req, res) => {
    getArtist(req.params.id).then((artist) => {
        if (!artist) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({artist});
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for getting artists based on pagination number.
let getByPage = (req, res) => {
    let page = req.params.page || 1,
        artistPerPage = 3,
        //Set from which index to get.
        init = (page > 1) ? (page * artistPerPage - artistPerPage) : 0,
        statement = "select * from artists limit ?, ?",
        values = [init, artistPerPage];

    mysql.query(statement, values, (err, rows, fields) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (rows.length === 0) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({artists: rows});
        }
    });
};

//Function for updating an artitst data by id.
let update = (req, res) => {
    let {name, description} = req.body

    if (!name || !description) {
        res.status(200).send({message: "Need to pass artist: name and description"});
    } else {
        let statement = "update artists set name = ?, description = ? where id = ?",
            values = [name, description, req.params.id];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for removing an artitst by id.
let remove = (req, res) => {
    getArtist(req.params.id).then((artist) => {
        if (!artist) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            //Get albums of artist.
            let statement = "select * from albums where artistID = ?";

            mysql.query(statement, [artist.id], (err, rows, fields) => {
                if (err) {
                    res.status(500).send({message: err});
                } else {
                    let album_id = "";

                    for (let i = 0; i < rows.length; i++) {
                        album_id += rows[i].id;

                        if (i < rows.length - 1) {
                            album_id += ",";
                        }
                    }

                    //Get songs of artist albums.
                    statement = "select * from songs where albumID in (" + album_id + ")";

                    mysql.query(statement, (err2, rows2, fields2) => {
                        if (err2) {
                            res.status(500).send({message: err2});
                        } else {
                            statement = "delete from artists where id = ?";

                            mysql.query(statement, [artist.id], (err3, rows3, fields3) => {
                                if (err3) {
                                    res.status(500).send({message: err3});
                                } else {
                                    if (artist.image) {
                                        mixins.removeFile(uploadedPath + artist.image);
                                    }

                                    //Remove deleted album images.
                                    for (let i in rows) {
                                        if (rows[i].image) {
                                            mixins.removeFile("./uploads/albums/" + rows[i].image);
                                        }
                                    }

                                    //Remove deleted song images.
                                    for (let i in rows2) {
                                        if (rows2[i].file) {
                                            mixins.removeFile("./uploads/songs/" + rows2[i].file);
                                        }
                                    }

                                    res.status(200).send({artist});
                                }
                            });
                        }
                    });
                }
            });
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for uploading an image to the artist by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        getArtist(req.params.id).then((artist) => {
            if (!artist) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "Artist is not found"});
            } else {
                let statement = "update artists set image = ? where id = ?",
                    values = [imageFile, artist.id];

                mysql.query(statement, values, (err, rows, fields) => {
                    if (err) {
                        mixins.removeFile(uploadedPath + imageFile);
                        res.status(500).send({message: err});
                    } else {
                        if (artist.image) {
                            mixins.removeFile(uploadedPath + artist.image);
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
    getByPage,
    update,
    remove,
    uploadImage,
    getImage
};
