var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDB");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

var data = mongoose.Schema({
  userName: String,
  password : String
});

var tempData = mongoose.model("useremailpasses", data);
var list = [
    {userName : "shahir",
    password : '123'}
]
function push() {
   tempData.insertMany(list);
}
push();