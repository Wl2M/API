const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name:{
        type :String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    image:{
        type: String,
        default: "https://us.123rf.com/450wm/koblizeek/koblizeek1902/koblizeek190200055/125337077-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-.jpg?ver=6",
    },
    inStock:{
        type : Number,
    },
    sales:{
        type: Number,
        default: 0,
    }, 
});

exports.Product = mongoose.model("Product",ProductSchema);













