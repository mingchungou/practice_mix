
"use strict";

let mysql = require("../services/mysql-handler"),
    mixins = require("../services/mixins"),
    uploadedPath = "./uploads/songs/";


//Function for adding a song.
let add = (req, res) => {
    let {number, name, duration, albumID} = req.body

    if (!number || !name || !duration || !albumID) {
        res.status(200).send({message: "Need to pass song: number, name, duration and albumID"});
    } else {
        let statement = "insert into songs (number, name, duration, albumID) values (?, ?, ?, ?)",
            values = [number, name, duration, albumID];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for getting all songs of specific album or entire songs.
let getAll = (req, res) => {
    let statement,
        values = [];

    if (req.params.album) {
        statement = "select * from songs where albumID = ? order by number";
        values = [req.params.album];
    } else {
        statement = "select * from songs order by albumID, number asc";
    }

    mysql.query(statement, values, (err, rows, fields) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (rows.length === 0) {
            res.status(404).send({message: "Song is not found"});
        } else {
            res.status(200).send({songs: rows});
        }
    });
};

//Function for getting a song by id, used locally.
let getSong = id => {
    return new Promise((resolve, reject) => {
        let statement = "select * from songs where id = ?";

        mysql.query(statement, [id], (err, rows, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows[0]);
            }
        });
    });
};

//Function for getting a song by id.
let get = (req, res) => {
    getSong(req.params.id).then((song) => {
        if (!song) {
            res.status(404).send({message: "Song is not found"});
        } else {
            res.status(200).send({song});
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for updating a song data by id.
let update = (req, res) => {
    let {name, duration} = req.body

    if (!name || !duration) {
        res.status(200).send({message: "Need to pass song: name and duration"});
    } else {
        let statement = "update songs set name = ?, duration = ? where id = ?",
            values = [name, duration, req.params.id];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for removing a song by id.
let remove = (req, res) => {
    getSong(req.params.id).then((song) => {
        if (!song) {
            res.status(404).send({message: "Song is not found"});
        } else {
            let statement = "delete from songs where id = ?";

            mysql.query(statement, [song.id], (err, rows, fields) => {
                if (err) {
                    res.status(500).send({message: err});
                } else {
                    if (song.file) {
                        mixins.removeFile(uploadedPath + song.file)
                    }

                    res.status(200).send({song});
                }
            });
        }
    }, err => {
        res.status(500).send({message: err});
    });
};

//Function for uploading an image to the song by id.
let uploadSong = (req, res) => {
    let songFile = mixins.validateSongFile(req, res, uploadedPath);

    if (songFile) {
        getSong(req.params.id).then((song) => {
            if (!song) {
                mixins.removeFile(uploadedPath + songFile);
                res.status(404).send({message: "Song is not found"});
            } else {
                let statement = "update songs set file = ? where id = ?",
                    values = [songFile, song.id];

                mysql.query(statement, values, (err, rows, fields) => {
                    if (err) {
                        mixins.removeFile(uploadedPath + songFile);
                        res.status(500).send({message: err});
                    } else {
                        if (song.file) {
                            mixins.removeFile(uploadedPath + song.file);
                        }

                        res.status(200).send({
                            song: songFile,
                            result: rows
                        });
                    }
                });
            }
        }, err => {
            mixins.removeFile(uploadedPath + songFile);
            res.status(500).send({message: err});
        });
    }
};

//Function for loading an image.
let getFile = (req, res) => {
    mixins.getFile(req, res, uploadedPath);
};


module.exports = {
    add,
    getAll,
    get,
    update,
    remove,
    uploadSong,
    getFile
};
