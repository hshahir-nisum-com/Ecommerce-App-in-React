const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/index')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost:27017/productData';
mongoose.connect(dbURI);


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)


app.listen(8080, () => {
    console.log("server is up");
  });
  