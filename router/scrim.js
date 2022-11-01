//ที่เก็บ Function
const express = require("express"); //ประกาศ Library express
const router = express.Router();
const { Scrim } = require("../models/Scrim")


//สร้าง  ใหม่//
router.post("/scrim", async (req, res) => {
    let scrim = new Scrim(req.body);
    scrim = await scrim.save();
    res.status(200).send("Success")
});


//get all 
router.get("/scrim", async (req, res) => {
    //ดึงข้อมูลจาก team
    const allScrim = await Scrim.find();
    res.send(allScrim);
});


//update 
router.put("/scrim/:id", async (req, res) => {
    const scrim = await Scrim.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send("Update Success");
});

router.get("/scrim/:id", async (req, res) => {
    const scrim = await Scrim.findById(req.params.id);
    res.send(scrim);
});






//Delete 
router.delete("/scrim/:id", async (req, res) => {
    await Scrim.findByIdAndDelete(req.params.id);
    res.send("Delete Success");
});


module.exports = router;