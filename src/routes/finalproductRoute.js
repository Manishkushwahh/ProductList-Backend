const express = require("express");
const FinalProduct = require("../models/finalProduct");
const { default: mongoose } = require("mongoose");
const Product = require("../models/product");
const Material = require("../models/material");

const finalproductRouter = express.Router();

finalproductRouter.post("/finalproduct",  async (req, res) => {
    
    
    const {productId, materialId, gradeId} = req.body;
    try {
       const finalProduct = new FinalProduct({
        productId,
        materialId,
        gradeId,
       });
       await finalProduct.save();
       res.json({
        message: "Final Product Added",
        data: finalProduct
       });
    } catch (error) {
        res.status(400).send("ERROR " + error.message);
    }

});

finalproductRouter.get("/finalproduct/view", async (req, res) => {
    try {
        const finalProduct = await FinalProduct.find({})
        .populate("productId", "productName productPrice productLength productShape")
        .populate("materialId", "materialName materialPrice")
        .populate("gradeId", "gradeNumber");
        res.send(finalProduct)
    } catch (error) {
        res.status(400).send("ERROR" + error.message);
    }
});

finalproductRouter.patch("/finalproduct/edit/:finalproductId", async (req, res) => {
    try {
        const {finalproductId} = req.params;
        const { materialname, productshape, productlength, materialprice, productprice } = req.body;

        const finalproduct = await FinalProduct.findById(finalproductId)
        .populate("productId")
        .populate("materialId")
        .populate("gradeId");


        if(!finalproduct) {
            return res.status(400).send("Product Not Found");
        }

        if(finalproduct.productId._id){
            const product = await Product.findById(finalproduct.productId._id);
            product.productShape = productshape || product.productShape;
            product.productLength = productlength || product.productLength;
            product.productPrice = productprice || product.productPrice;
            await product.save();
        }

        if(finalproduct.materialId._id){
            const material = await Material.findById(finalproduct.materialId._id);
            material.materialName = materialname || material.materialName;
            material.materialPrice = materialprice || material.materialPrice;
            await material.save();
        }


        await finalproduct.save();


        res.json({
            message: "Final product Updated",
            data: finalproduct
        })
    } catch (error) {
        res.status(400).send("ERROR" + error.message);
    }
});



module.exports = finalproductRouter;