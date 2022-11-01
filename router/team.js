//ที่เก็บ Function
const express = require("express"); //ประกาศ Library express
const router = express.Router();
const { Team } = require("../models/Team")


//สร้าง Team ใหม่//
router.post("/team", async (req, res) => {
    let team = new Team(req.body);
    team = await team.save();
    res.status(200).send("Success")
});


//get all todo
router.get("/team", async (req, res) => {
    //ดึงข้อมูลจาก team
    const allTeam = await Team.find();
    res.send(allTeam);
});

//update todo
router.put("/team/:id", async (req, res) => {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send("Update Success");
});
//Delete todo
router.delete("/team/:id", async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
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