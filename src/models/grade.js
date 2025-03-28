const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    gradeNumber: {
        type: String,
        require: true,
        unique: true,
    }
},{timestamps: true});

const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade;