const router = require("express").Router();
const CartModel = require("../models/addToCart");

//getData
router.post("/addtocart", async function (req, res) {

  const { products } = req.body;
  console.log("products ::::",products)
  const cart = await CartModel.create({ products  });
  res.status(201).json({ cart: cart._id });
    
  res.send("Product is added to cart");
});

module.exports = router;
