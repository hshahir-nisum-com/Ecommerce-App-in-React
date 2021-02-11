var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const db = require("./db");
// parse application/x-www-form-urlencoded;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const product = require("./routes/product");
const index = require("./routes/index");

// middleware
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(db)

// routes
app.use(authRoutes);
app.use(product);
app.use(index);

app.listen(8080, () => {
  console.log("server is up");
});
