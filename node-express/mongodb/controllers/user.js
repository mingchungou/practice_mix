
"use strict";

let bcrypt = require("bcrypt-nodejs"), //Load bcrypt-nodejs module.
    jwt = require("../services/jwt"),
    mixins = require("../services/mixins"),
    uploadedPath = "./uploads/users/";

//Load models
let User = require("../models/user");


//Function for adding an user.
let add = (req, res) => {
    let user = new User();
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.image = null;

    if (!user.name || !user.username || !user.email || !req.body.password) {
        res.status(200).send({message: "Need to pass user: name, username, email, and password"});
    } else {
        //Encode password
        bcrypt.hash(req.body.password, null, null, (err, hash) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                user.password = hash;

                user.save((err, rows) => {
                    if (err) {
                        res.status(500).send({message: err});
                    } else if (!rows) {
                        res.status(404).send({message: "User is not added successful"});
                    } else {
                        res.status(200).send({user: rows});
                    }
                });
            }
        });
    }
};

//Function for checking if user exists.
let login = (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (!user) {
            res.status(404).send({message: "User is not found"});
        } else {
            //Checking user password by bcrypt.
            bcrypt.compare(req.body.password, user.password, (err, check) => {
                if (err) {
                    res.status(500).send({message: err});
                } else if (!check) {
                    res.status(404).send({message: "User is not found"});
                } else {
                    if (req.body.gethash) {
                        //Return a token.
                        res.status(200).send({token: jwt.createToken(user)});
                    } else {
                        //Return user data.
                        res.status(200).send({user});
                    }
                }
            });
        }
    });
};

//Function for updating an user data by id.
let update = (req, res) => {
    if (!req.body.name || !req.body.username) {
        res.status(200).send({message: "Need to pass user: name and username"});
    } else {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            if (err) {
                res.status(500).send({message: err});
            } else if (!user) {
                res.status(404).send({message: "User is not updated successful"});
            } else {
                res.status(200).send({user});
            }
        });
    }
};

//Function for uploading an image to the user by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        User.findByIdAndUpdate(req.params.id, {image: imageFile}, (err, user) => {
            if (err) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(500).send({message: err});
            } else if (!user) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "User is not updated successful"});
            } else {
                if (user.image) {
                    mixins.removeFile(uploadedPath + user.image);
                }

                res.status(200).send({
                    image: imageFile,
                    user
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
    login,
    update,
    uploadImage,
    getImage
};
