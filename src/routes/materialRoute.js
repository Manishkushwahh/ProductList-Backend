const express = require("express");
const Material = require("../models/material");

const materialRouter = express.Router();

materialRouter.post("/material/add", async (req, res) => {

    try {
        const {materialName, materialPrice} = req.body;

        const material = new Material({
            materialName,
            materialPrice,
        });

        await material.save();
        res.json({
            message: "Material Added",
            data: material
        })
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }


})

materialRouter.get("/material/view", async (req, res) => {
    try {
        const materials = await Material.find({});
        res.send(materials);
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
});

module.exports = materialRouter;