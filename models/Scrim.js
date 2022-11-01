const mongoose = require("mongoose");
const ScrimSchema = mongoose.Schema({
    name:{
        type: String,
    },
    description:{
        type: String,
    },
    rank:{
        type: String,
    },
    time:{
        type: String,
    },
});

exports.Scrim = mongoose.model("Scrim", ScrimSchema);
