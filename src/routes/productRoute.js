const Product = require("../models/product");

const express = require("express");

const productRouter = express.Router();

productRouter.post("/product/add", async (req, res) => {

    try {
        const {productName, productPrice, productShape, productLength} = req.body;

        const product = new Product({
            productName,
            productPrice,
            productShape,
            productLength,
        });
        await product.save();
        res.json({
            message: "Product Added",
            data: product
        })
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
});

productRouter.get("/product/view", async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products);
    } catch (error) {
        res.status(400).send("Error " + error.message);
    }
});

module.exports = productRouter;