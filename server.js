var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const db = require("./db");
const dotenv = require('dotenv');
dotenv.config();


// parse application/x-www-form-urlencoded;
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const product = require("./routes/product");
const index = require("./routes/index");
const addToCart = require("./routes/addToCart");


// middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(db)

// routes
app.use(addToCart);
app.use(authRoutes);
app.use(product);
app.use(index);

app.listen(process.env.PORT, () => {
  console.log("server is up");
});
