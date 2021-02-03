var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

const authRoutes = require("./Login/routes/index");

// middleware
app.use(express.static("public"));
app.use(express.json());
// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = "mongodb://localhost:27017/productData";
mongoose.connect(dbURI);

var data = mongoose.Schema({
  category: String,
  description: String,
  id: Number,
  image: String,
  price: Number,
  title: String,
});
//creating a model
var tempData = mongoose.model("data", data);

// routes
app.use(authRoutes);

app.get("/", async function (req, res) {
  let getDatas = await tempData.find({});
  console.log(getDatas);
  res.send(getDatas);
});

app.listen(8080, () => {
  console.log("server is up");
});
