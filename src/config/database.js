const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://manishkushwah169:GDmzOTkDbGtbdZFb@productlist.ox3am.mongodb.net/ProductListData");
}

module.exports = connectDB;


// password - GDmzOTkDbGtbdZFb