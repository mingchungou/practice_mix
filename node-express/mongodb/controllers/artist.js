
"use strict";

let pagination = require("mongoose-pagination"), //Load mongoose-pagination module.
    mixins = require("../services/mixins"),
    uploadedPath = "./uploads/artists/";

//Load models
let Artist = require("../models/artist"),
    Album = require("../models/album"),
    Song = require("../models/song");


//Function for adding an artitst.
let add = (req, res) => {
    let artist = new Artist();
    artist.name = req.body.name;
    artist.description = req.body.description;
    artist.image = null;

    if (!artist.name || !artist.description) {
        res.status(200).send({message: "Need to pass artist: name and description"});
    } else {
        artist.save((err, rows) => {
            if (err) {
                res.status(500).send({message: err});
            } else if (!rows) {
                res.status(404).send({message: "Artist is not added successful"});
            } else {
                res.status(200).send({artist: rows});
            }
        });
    }
};

//Function for getting all artists.
let getAll = (req, res) => {
    Artist.find((err, artists) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!artists || artists.length === 0) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({artists});
        }
    });
};

//Function for getting an artist by id.
let get = (req, res) => {
    Artist.findById(req.params.id, (err, artist) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!artist) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({artist});
        }
    });
};

//Function for getting artists based on pagination number.
let getByPage = (req, res) => {
    let page = req.params.page || 1,
        itemsPerPage = 3;

    Artist.find().sort("name").paginate(page, itemsPerPage, (err, artists, total) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!artists || artists.length === 0) {
            res.status(404).send({message: "Artist is not found"});
        } else {
            res.status(200).send({
                total,
                artists
            });
        }
    });
};

//Function for updating an artitst data by id.
let update = (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.status(200).send({message: "Need to pass artist: name and description"});
    } else {
        Artist.findByIdAndUpdate(req.params.id, req.body, (err, artist) => {
            if (err) {
                res.status(500).send({message: err});
            } else if (!artist) {
                res.status(404).send({message: "Artist is not updated successful"});
            } else {
                res.status(200).send({artist});
            }
        });
    }
};

//Function for removing an artitst by id.
let remove = (req, res) => {
    Artist.findByIdAndRemove(req.params.id, (err, artist) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!artist) {
            res.status(404).send({message: "Artist is not removed successful"});
        } else {
            //Remove albums of artist.
            Album.find({artist: artist._id}, (err2, albums2) => {
                if (err2) {
                    res.status(500).send({message: err2});
                } else {
                    Album.remove({artist: artist._id}).exec((err3, result3) => {
                        if (err3) {
                            res.status(500).send({message: err3});
                        } else {
                            let album_id_array = [];

                            for (let i in albums2) {
                                album_id_array.push(albums2[i]._id);
                            }

                            //Remove songs of artist albums.
                            Song.find({album: {$in: album_id_array}}).exec((err4, songs4) => {
                                if (err4) {
                                    res.status(500).send({message: err4});
                                } else {
                                    Song.remove({album: {$in: album_id_array}}).exec((err5, result5) => {
                                        if (err5) {
                                            res.status(500).send({message: err5});
                                        } else {
                                            if (artist.image) {
                                                mixins.removeFile(uploadedPath + artist.image)
                                            }

                                            //Remove deleted album images.
                                            for (let i in albums2) {
                                                if (albums2[i].image) {
                                                    mixins.removeFile("./uploads/albums/" + albums2[i].image);
                                                }
                                            }

                                            //Remove deleted song images.
                                            for (let i in songs4) {
                                                if (songs4[i].file) {
                                                    mixins.removeFile("./uploads/songs/" + songs4[i].file);
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
            });
        }
    });
};

//Function for uploading an image to the artist by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        Artist.findByIdAndUpdate(req.params.id, {image: imageFile}, (err, artist) => {
            if (err) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(500).send({message: err});
            } else if (!artist) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "Artist is not updated successful"});
            } else {
                if (artist.image) {
                    mixins.removeFile(uploadedPath + artist.image);
                }

                res.status(200).send({
                    image: imageFile,
                    artist
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
    getByPage,
    update,
    remove,
    uploadImage,
    getImage
};
