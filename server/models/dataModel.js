const mongoose = require("mongoose");


var data = mongoose.Schema({
    category: String,
    description: String,
    id: Number,
    image: String,
    price: Number,
    title: String,
  });
  
var tempData = mongoose.model("datas", data);
  
module.exports = tempData
