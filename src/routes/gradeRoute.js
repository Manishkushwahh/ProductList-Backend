const express = require("express");
const Grade = require("../models/grade");

const gradeRouter = express.Router();

gradeRouter.post("/grade/add", async (req, res) => {
    try {
        const { gradeNumber } = req.body;

        const grade = new Grade({
            gradeNumber,
        });

        await grade.save();
        res.json({
            message: "Grade Added",
            data: grade
        });
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
});

gradeRouter.get("/grade/view", async (req, res) => {
    try {
        const grades = await Grade.find({});
        res.send(grades);
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
});

module.exports = gradeRouter;