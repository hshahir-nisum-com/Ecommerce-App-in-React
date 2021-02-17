const router = require("express").Router();
const CartModel = require("../models/cart");
const userAuth = require("../middlewares/index");
const cartController = require("../controller/cartController");

//getData
router.put("/addtocart", cartController.addtocart);

router.get("/getcart", userAuth, cartController.getCart);
router.get("/gettotalcount", userAuth, cartController.totalCount);
router.put("/increaseproductquantity", userAuth, cartController.increaseproductquantity);
router.put("/decreaseproductquantity", userAuth, cartController.decreaseproductquantity);
router.delete("/deleteproductquantity/:id", userAuth, cartController.deleteproductquantity);



module.exports = router;
