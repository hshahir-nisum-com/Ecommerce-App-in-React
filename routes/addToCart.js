const router = require("express").Router();
const CartModel = require("../models/addToCart");

//getData
router.put("/addtocart", async function (req, res) {
  const { userid, products } = req.body;

  let { name, quantity } = products;

  const userFind = await CartModel.findOne({
    userid,
    active: true,
    "products.name": name,
  });

  if (userFind) {
    userFind.products.quantity = quantity + userFind.products.quantity;
    await userFind.save();
    return res.status(201).json({ cart: userFind._id });
  } else {
    const cart = await CartModel.create({ userid, products });
    return res.status(201).json({ cart: cart._id });
  }
});

module.exports = router;
