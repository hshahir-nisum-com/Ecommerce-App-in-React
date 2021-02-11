const mongoose = require("mongoose");


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
  
module.exports =  {
  products,
  categories
}
 