var express = require("express");
var mongoose = require("mongoose");
var app = express();

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

const dbURI = "mongodb://localhost:27017/productData";
mongoose.connect(dbURI);

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
  product : {
    type: mongoose.Schema.Types.ObjectId ,
    ref : 'products'
  },
  category: String,
  
});

var products = mongoose.model("products", productSchema);
var categories = mongoose.model("categories", categorySchema);

app.get("/", async function (req, res) {
  let getDatas = await products.find({});
  console.log(getDatas);
  res.send(getDatas);
});

app.get("/cat", async function (req, res) {
  let getDatas = await categories
    .find({categoryID : "2-fashCat"})
    .populate("categories")
    .then(function (dbProduct) {
        console.log(dbProduct)
      res.json(dbProduct);
    })
    .catch(function (err) {
      res.json(err);
    });
  console.log(getDatas);
  res.send(getDatas);
});
app.listen(8081, () => {
  console.log("server is up");
});
