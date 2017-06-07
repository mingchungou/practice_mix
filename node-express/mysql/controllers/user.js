
"use strict";

let mysql = require("../services/mysql-handler"),
    mixins = require("../services/mixins"),
    bcrypt = require("bcrypt-nodejs"), //Load bcrypt-nodejs module.
    jwt = require("../services/jwt"),
    uploadedPath = "./uploads/users/";


//Function for adding an user.
let add = (req, res) => {
    let {name, username, email, password} = req.body

    if (!name || !username || !email || !password) {
        res.status(200).send({message: "Need to pass user: name, username, email, and password"});
    } else {
        //Encode password
        bcrypt.hash(password, null, null, (err, hash) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                let statement = "insert into users (name, username, email, password) values (?, ?, ?, ?)",
                values = [name, username, email, hash];

                mysql.query(statement, values, (err, rows, fields) => {
                    if (err) {
                        res.status(500).send({message: err});
                    } else {
                        res.status(200).send({result: rows});
                    }
                });
            }
        });
    }
};

//Function for checking if user exists.
let login = (req, res) => {
    let statement = "select * from users where email = ?",
        {email, password} = req.body;

    mysql.query(statement, [email], (err, rows, fields) => {
        if (err) {
            res.status(500).send({message: err});
        } else if (rows.length === 0) {
            res.status(404).send({message: "User is not found"});
        } else {
            let user = rows[0];

            //Checking user password by bcrypt.
            bcrypt.compare(password, user.password, (err, check) => {
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
    let {name, username} = req.body;

    if (!name || !username) {
        res.status(200).send({message: "Need to pass user: name and username"});
    } else {
        let statement = "update users set name = ?, username = ? where id = ?",
            values = [name, username, req.params.id];

        mysql.query(statement, values, (err, rows, fields) => {
            if (err) {
                res.status(500).send({message: err});
            } else {
                res.status(200).send({result: rows});
            }
        });
    }
};

//Function for uploading an image to the user by id.
let uploadImage = (req, res) => {
    let imageFile = mixins.validateImageFile(req, res, uploadedPath);

    if (imageFile) {
        let statement = "select * from users where id = ?";

        mysql.query(statement, [req.params.id], (err, rows, fields) => {
            if (err) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(500).send({message: err});
            } else if (rows.length === 0) {
                mixins.removeFile(uploadedPath + imageFile);
                res.status(404).send({message: "User is not found"});
            } else {
                statement = "update users set image = ? where id = ?";
                let user = rows[0],
                    values = [imageFile, user.id];

                mysql.query(statement, values, (err2, rows2, fields2) => {
                    if (err2) {
                        mixins.removeFile(uploadedPath + imageFile);
                        res.status(500).send({message: err2});
                    } else {
                        if (user.image) {
                            mixins.removeFile(uploadedPath + user.image);
                        }

                        res.status(200).send({
                            image: imageFile,
                            result: rows2
                        });
                    }
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
