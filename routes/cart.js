const router = require("express").Router();
const CartModel = require("../models/cart");

//getData
router.put("/addtocart", async function (req, res) {
  const { userid, products } = req.body;

  const cart = await CartModel.create({ userid, products });
  return res.status(201).json({ cart: cart._id });
});

router.get("/getCart", async function (req, res) {
  const cartProductTrue = await CartModel.find({});
  console.log("cartProductTrue :::", cartProductTrue);

  return res.status(200).json(cartProductTrue);
});

module.exports = router;
