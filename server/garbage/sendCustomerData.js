var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/Users");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

var usersSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

usersSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

//creating a model
var User = mongoose.model("Users", usersSchema);

// parse application/x-www-form-urlencoded;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/signup", function (req, res, next) {
  const { firstname, email, password } = req.body;
  console.log("Request Url:" + req.url);
  console.log(req.body);
  User.findOne({ email: req.body.email }, function (err, users) {
    if (err) console.log(err);

    // object of all the users

    console.log(users);
    if (users) {
      res.status(408).send();
    } else {
      var newUser = new User({
        firstname,
        email,
        password,
      });

      newUser.save(function (err) {
        if (err) throw err;

        res.send("User has been Saved!!!");
        console.log("User has been Saved!!!");
      });
    }
  });
});
