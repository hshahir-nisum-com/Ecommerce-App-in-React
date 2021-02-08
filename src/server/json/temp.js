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
});

var categorySchema = mongoose.Schema({
  categoryID: String,
  category: String,
});

var products = mongoose.model("products", productSchema);
var category = mongoose.model("categories", categorySchema);

function push() {
  products.insertMany(product);
  category.insertMany(cat);
}

function get() {
  products.find({}).populate("categoryID").exec(
    (err,product)=>{
      if (err) return err
    }
  );
}
push();

console.log(get());
