const mongoose = require("mongoose");

// database connection
const dbURI = "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";
mongoose.connect(dbURI);