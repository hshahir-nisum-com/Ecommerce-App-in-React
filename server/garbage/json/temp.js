var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productData");
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
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
});

var categorySchema = mongoose.Schema({
  categoryID: String,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  category: String,
 
});

var products = mongoose.model("products", productSchema);
var categories = mongoose.model("categories", categorySchema);

function push() {
  products.insertMany(product);
  categories.insertMany(cat);
}

push();
