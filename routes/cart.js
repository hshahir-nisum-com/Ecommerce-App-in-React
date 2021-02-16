const router = require("express").Router();
const CartModel = require("../models/cart");
const userAuth = require("../middlewares/index");
const cartController = require("../controller/cartController");

//getData
router.put("/addtocart", cartController.addtocart);

router.get("/getCart", userAuth, async function (req, res) {
  const cartProductTrue = await CartModel.find({
    user : req.body.user._id
  });
  console.log("cartProductTrue :::", cartProductTrue);

  return res.status(200).json(cartProductTrue);
});

module.exports = router;
