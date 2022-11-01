const mongoose = require("mongoose");
const TeamSchema = mongoose.Schema({
    TeamName: {
        type: String,
    },
    LogoTeam:{
        type: String,
        default: "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6",
    },
    member1: {
        type: String,
    },
    member2: {
        type: String,
    },
    member3: {
        type: String,
    },
    member4: {
        type: String,
    },
    member5: {
        type: String,
    },
});

exports.Team = mongoose.model("Team", TeamSchema);
