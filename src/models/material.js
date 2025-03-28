const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
    materialName: {
        type: String,
        require: true
    },
    materialPrice: {
        type: Number
    },
},{timestamps: true});

const Material = mongoose.model("Material", materialSchema);
module.exports = Material;