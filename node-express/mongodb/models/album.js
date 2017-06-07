
"use strict";

let mongoose = require("mongoose"), //Load mongoose module.
    AlbumSchema = mongoose.Schema({ //Create album schema.
        title: String,
        description: String,
        year: Number,
        image: String,
        artist: {type: mongoose.Schema.ObjectId, ref: "artist"}
    });


module.exports = mongoose.model("album", AlbumSchema);
