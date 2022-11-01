//Library mongoose
const mongoose = require("mongoose");
//Schema โครงสร้าง DB
const TodoSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description:{
        type: String,
    },
    done : {
        type: Boolean,
        default : false,
    },
    created: {
        type: Date,
        default : Date.now,
    },



});
//export Function Todo 
exports.Todo = mongoose.model("Todo",TodoSchema);



