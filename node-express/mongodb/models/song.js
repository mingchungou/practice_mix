
"use strict";

let mongoose = require("mongoose"), //Load mongoose module.
    SongSchema = mongoose.Schema({ //Create song schema.
        number: Number,
        name: String,
        duration: String,
        file: String,
        album: {type: mongoose.Schema.ObjectId, ref: "album"}
    });


module.exports = mongoose.model("song", SongSchema);
