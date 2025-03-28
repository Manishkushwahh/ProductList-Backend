const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
        unique: true
    },
    productPrice: {
        type: Number
    },
    productShape: {
        type: String
    },
    productLength: {
        type: String
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;