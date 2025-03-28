const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const Product = require("./models/product");
const Material = require("./models/material");
const Grade = require("./models/grade");
const FinalProduct = require("./models/finalProduct");
const app = express();
const cors = require("cors");
const productRouter = require("./routes/productRoute");
const materialRouter = require("./routes/materialRoute");
const gradeRouter = require("./routes/gradeRoute");
const finalproductRouter = require("./routes/finalproductRoute");

app.use(cors({
    // origin: "http://localhost:5173/",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
"optionsSuccessStatus": 200
    
}));
app.use(express.json());
app.use(cookieParser());

app.use("/", productRouter);
app.use("/", materialRouter);
app.use("/", gradeRouter);
app.use("/", finalproductRouter);
// app.options('*', cors())


connectDB()
.then(() => {
    console.log("Database Connected Successfully");
    app.listen(8888, () => {
        console.log("Seever is successfully runnig on Port 8888...");
    });
})
.catch((err) => {
    console.log("Database cannot connected");
});