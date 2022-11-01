//ที่เก็บ Function
const express = require("express"); //ประกาศ Library express
const router = express.Router();
const {Todo} = require("../models/Todo")

router.get("/test",(req,res)=>{
    res.send("<h1>test</h1>");
});
router.post("/test", (req, res) => {
   console.log(req.body);
   res.send(req.body.name);
});

//สร้าง Todo ใหม่//
router.post("/todo",async (req,res)=>{
    let todo = new Todo({
        title : req.body.title,
        description : req.body.description,
    });
    todo = await todo.save();
    res.status(200).send("Success")
});


//get all todo
router.get("/todo", async (req,res)=>{
    //ดึงข้อมูลจาก Todo
    const allTodo = await Todo.find();
    res.send(allTodo); 
});

//update todo
router.put("/todo/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send("Update Success");
});
//Delete todo
router.delete("/todo/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.send("Delete Success");
});
//CRUD
/*
Create = POST
Read = GET
Update = PUT
Delete = DELETE
*/ 



module.exports = router;