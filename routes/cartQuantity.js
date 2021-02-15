const router = require("express").Router();
const CartModel = require("../models/cart");

router.get("/checkquantity", async function (req, res) {
  const userFind = await CartModel.find({});

  res.send(userFind);
});
module.exports = router;
