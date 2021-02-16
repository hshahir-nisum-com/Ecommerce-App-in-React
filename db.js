const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

console.log("in if block", process.env.PORT);

if (process.env.NODE_ENV == "production") {
  const dbURI =
    "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";
  mongoose.connect(dbURI);
} else {
  console.log("in else  block");

  const dbURI = "mongodb://localhost:27017/productData";
  mongoose.connect(dbURI);
}
