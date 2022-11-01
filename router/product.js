//ที่เก็บ Function
const express = require("express"); //ประกาศ Library express
const router = express.Router();
const { Product } = require("../models/Product")


//สร้าง Product ใหม่//
router.post("/product", async (req, res) => {
    let product = new Product(req.body);
    product = await product.save();
    res.status(200).send("Success")
});


//get all todo
router.get("/product", async (req, res) => {
    //ดึงข้อมูลจาก Todo
    const allProduct = await Product.find();
    res.send(allProduct);
});

//update todo
router.put("/product/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send("Update Success");
});
//Delete todo
router.delete("/product/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
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