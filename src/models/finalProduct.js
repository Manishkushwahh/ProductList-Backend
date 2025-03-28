const mongoose = require("mongoose");
const Product = require("./product");
const Material = require("./material");
const Grade = require("./grade");

const finalProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        require: true,
    },
    materialId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Material,
        require: true,
    },
    gradeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Grade,
        require: true,
    },
    price: {
        type: Number
    }
}, {timestamps: true});


const FinalProduct = mongoose.model("FinalProduct", finalProductSchema);
module.exports = FinalProduct;