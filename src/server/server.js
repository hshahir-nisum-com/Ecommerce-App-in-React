var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productData");


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

var data = mongoose.Schema({
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
  title: String,
});

var tempData = mongoose.model("data", data);

app.get("/", async function (req, res) {
  let getDatas = await tempData.find({});
  console.log(getDatas);
  res.send(getDatas);
});


app.delete('/orderplaced/:id',async function (req, res) {
  console.log("req.params.id :::",req.params.id);
  let getDatas = await tempData.deleteOne({id : req.params.id},function(){
    
    console.log("data dltd")
  });
  console.log(getDatas);
  res.send("deleted Data")
})


app.listen(8080, () => {
  console.log("server is up");
});
