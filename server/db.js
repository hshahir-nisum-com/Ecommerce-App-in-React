const mongoose = require("mongoose");

// database connection
const dbURI = "mongodb://localhost:27017/productData";
mongoose.connect(dbURI);