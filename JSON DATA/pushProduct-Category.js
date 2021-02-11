var mongoose = require("mongoose");
const dbURI = "mongodb+srv://shahir:123@e-commercedb.rdkti.mongodb.net/ecommercedata?retryWrites=true&w=majority";

mongoose.connect(dbURI);
const product = require("./product.json");
const cat = require("./productCatg.json");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

var productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  categoryID: String,
  Quantity: Number,
  image: String,
});

var categorySchema = mongoose.Schema({
  categoryID: String,
  category: String,
 
});

var products = mongoose.model("products", productSchema);
var categories = mongoose.model("categories", categorySchema);

function push() {
  products.insertMany(product);
  categories.insertMany(cat);
}

push();
