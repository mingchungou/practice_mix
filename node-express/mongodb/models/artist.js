
"use strict";

let mongoose = require("mongoose"), //Load mongoose module.
    ArtistSchema = mongoose.Schema({ //Create artist schema.
        name: String,
        description: String,
        image: String
    });


module.exports = mongoose.model("artist", ArtistSchema);
