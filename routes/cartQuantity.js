const router = require("express").Router();
const CartModel = require("../models/addToCart");

router.get("/checkquantity", async function (req, res) {


  const userFind = await CartModel.find({
    active: true, 
  });


   res.send( userFind);


});
module.exports = router;
