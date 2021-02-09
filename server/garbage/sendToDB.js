var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productData");
const axios = require("axios");

const fetchData = async () => {
  try {
    return await axios.get("https://fakestoreapi.com/products");
  } catch (error) {
    console.error(error);
  }
};
const getData = async () => {
  const { data } = await fetchData();
  return data;
};

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

async function get() {
  let data = await getData();
  await tempData.insertMany(data);
}
get();