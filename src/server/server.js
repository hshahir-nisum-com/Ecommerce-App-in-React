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

app.delete("/orderplaced/:id", async function (req, res) {
  console.log("req.params.id :::", req.params.id);
  let getDatas = await tempData.deleteOne({ id: req.params.id }, function () {
    console.log("data dltd");
  });
  console.log(getDatas);
  res.send("deleted Data");
});






var bcrypt = require("bcrypt");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



var usersSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true, unique: true },
  password : { type: String, required: true },
});

usersSchema.pre("save", () => console.log("Hello from pre save"));
//creating a model
var User = mongoose.model("Users", usersSchema);

app.post("/signup", function (req, res, next) {
  console.log("Request Url:" + req.url);
  console.log(req.body);

  const { firstname, email, password } = req.body;
  User.findOne({ email: req.body.email }, function (err, users) {
    if (err) console.log(err);

    // object of all the users

    console.log("users",users);
    if (users) {
      res.status(408).send();
    } else {
      User.insertMany({
        firstname,
        email,
        password,
      });
      usersSchema().save()
      res.send("User has been Saved!!!");
      console.log("User has been Saved!!!");
    }
  });
});

app.listen(8081, () => {
  console.log("server is up");
});
