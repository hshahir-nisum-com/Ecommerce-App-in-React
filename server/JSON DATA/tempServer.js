  
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
});
var categorySchema = mongoose.Schema({
  categoryID: String,
  category: String,
});

var products = mongoose.model("products", productSchema);
var categories = mongoose.model("categories", categorySchema);

app.get("/", async function (req, res) {
  let getDatas = await products.find({});
  console.log(mongoose.Schema.Types);
  res.send(getDatas);
});

app.get("/cat", async function (req, res) {
  let getDatas = await products.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "categoryID",
        as: "category",
      },
    }, {
      $unwind: "$category"
  },
  ]);
    
  console.log(getDatas);
  res.send(getDatas);
});
app.listen(8081, () => {
  console.log("server is up");
});