const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const dbURI =
//     "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";
//   mongoose.connect(dbURI);

// database connection
if (process.env.NODE_ENV == "development") {
  const dbURI = "mongodb://localhost:27017/productData";
  mongoose.connect(dbURI);
} else {
  const dbURI =
    "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";
  mongoose.connect(dbURI);
}
