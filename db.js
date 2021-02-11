const mongoose = require("mongoose");

// database connection
if ((process.env.production)) {
    const dbURI =
    "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";
  mongoose.connect(dbURI);
} else {
    console.log("in local")
    const dbURI =
    "mongodb://localhost:27017/productData";
  mongoose.connect(dbURI);
}
