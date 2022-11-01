const express = require("express"); //ประกาศ Library express
const app = express();
const mongoose = require("mongoose") //ประกาศ Library mongoose
const bodyParser = require('body-parser');
const cors = require("cors");

//middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
mongoose.connect(
    "mongodb+srv://Wl2M:Worameth5421@cluster0.mbs2djx.mongodb.net/TestDB?retryWrites=true&w=majority"
).then(()=>{
    console.log("Database Connected");
}) 









//import router
const todoRouter = require("./router/todo");
const productRouter = require("./router/product");
const teamRouter = require("./router/team");
const scrimRouter = require("./router/scrim");
// use router
app.use("/",todoRouter);
app.use("/", productRouter);
app.use("/", teamRouter);
app.use("/", scrimRouter);


app.listen("3000", () =>{
    console.log("listen to port 3000");
});







