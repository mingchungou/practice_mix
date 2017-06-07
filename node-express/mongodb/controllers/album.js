
"use strict";

let mixins = require("../services/mixins"),
    uploadedPath = "./uploads/albums/";

//Load models
let Album = require("../models/album"),
    Song = require("../models/song");


//Function for adding an album.
let add = (req, res) => {
    let album = new Album();
    album.title = req.body.title;
    album.description = req.body.description;
    album.year = req.body.year;
    album.image = null;
    album.artist = req.body.artist;

    if (!album.title || !album.description || !album.year || !album.artist) {
        res.status(200).send({message: "Need to pass album: title, description, year and artist"});
    } else {
        album.save((err, rows) => {
            if (err) {
                res.status(500).send({message: err});
            } else if (!rows) {
                res.status(404).send({message: "Album is not added successful"});
            } else {
                res.status(200).send({album: rows});
            }
        });
    }
};

//Function for getting all albums or specific artist albums.
let getAll = (req, res) => {
    let find;

    if (!req.params.artist) {
        find = Album.find().sort("title");
    } else {
        find = Album.find({artist: req.params.artist}).sort("year");
    }

    find.populate({path: "artist"}).exec((err, albums) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!albums || albums.length === 0) {
            res.status(404).send({message: "Album is not found"});
        } else {
            res.status(200).send({albums});
        }
    });
};

//Function for getting an album by id.
let get = (req, res) => {
    Album.findById(req.params.id).populate({path: "artist"}).exec((err, album) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!album) {
            res.status(404).send({message: "Album is not found"});
        } else {
            res.status(200).send({album});
        }
    });
};

//Function for updating an album data by id.
let update = (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.year) {
        res.status(200).send({message: "Need to pass album: title, description and year"});
    } else {
        Album.findByIdAndUpdate(req.params.id, req.body, (err, album) => {
            if (err) {
                res.status(500).send({message: err});
            } else if (!album) {
                res.status(404).send({message: "Album is not updated successful"});
            } else {
                res.status(200).send({album});
            }
        });
    }
};

//Function for removing an album by id.
let remove = (req, res) => {
    Album.findByIdAndRemove(req.params.id, (err, album) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!album) {
            res.status(404).send({message: "Album is not removed successful"});
        } else {
            //Remove songs of album.
            Song.find({album: album._id}, (err2, songs2) => {
                if (err2) {
                    res.status(500).send({message: err2});
                } else {
                    Song.remove({album: album._id}, (err3, result3) => {
                        if (err3) {
                            res.status(500).send({message: err3});
                        } else {
                            if (album.image) {
                                mixins.removeFile(uploadedPath + album.image)
                            }

                            //Remove deleted song images.
                            for (let i in songs2) {
                                if (songs2[i].file) {
                                    mixins.removeFile("./uploads/songs/" + songs2[i].file);
                                }
                            }

                            res.status(200).send({album});
                        }
                    });
                }
            });
        }
    });
};

//Function for uploading an image to the album by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        Album.findByIdAndUpdate(req.params.id, {image: imageFile}, (err, album) => {
            if (err) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(500).send({message: err});
            } else if (!album) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "Album is not updated successful"});
            } else {
                if (album.image) {
                    mixins.removeFile(uploadedPath + album.image);
                }

                res.status(200).send({
                    image: imageFile,
                    album
                });
            }
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
