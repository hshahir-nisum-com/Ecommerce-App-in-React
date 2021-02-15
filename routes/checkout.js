const router = require("express").Router();
const checkoutModel = require("../models/checkOut");
const CartModel = require("./cart");
const Product = require("../models/dataModel");
const cart = require("../models/cart");

const {
  products
} = Product

router.post("/checkout", async function (req, res) {
  const { cartid, userid, buyer,  payment } = req.body;
  console.log("check out :::",req.body)
  const checkOut = await checkoutModel.create({
    cartid,
    userid,
    buyer,
    products:  req.body.products,
    payment,
  });
  let productQuantityUpdate;
    console.log("IIIIIIIIIII",cartid)
    let arr = req.body.products.map(({productId})=> productId)
    for (let i = 0; i< arr.length; i++){
    console.log("productId ::::",arr[i])

      productQuantityUpdate = await products.findOne({
        id: arr[i],
      })
    
    console.log("quantity update ::::::::::", productQuantityUpdate);
   if (productQuantityUpdate) {
     productQuantityUpdate.Quantity = parseInt(productQuantityUpdate.Quantity) - parseInt( req.body.products[i].quantity )
     productQuantityUpdate.save()
   }
  }

  const tobedeleteCart = await cart.findOne({
    _id : cartid[0]
  })
  tobedeleteCart.remove()
  return res.status(201).json({ cart: req.body });
});

module.exports = router;
