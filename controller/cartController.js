const CartModel = require("../models/cart");

module.exports.addtocart = async (req, res) => {
  const { userid, products } = req.body;
  const findUser = await CartModel.findOne({
    user: userid,
  }).select("products");
  console.log("userid::::", userid);

  if (findUser) {
    for (let i =0; i < findUser.products.length ; i++){
      console.log(`12 findUser.products[${i}]._id`, findUser.products[i]._id , "products._id",req.body.products)

      if(findUser.products[i]._id == products._id){
        console.log(`findUser.products[${i}]._id`, findUser.products[i]._id , "products._id",products._id)
        findUser.products[i].quantity = parseInt(findUser.products[i].quantity) + parseInt(products.quantity)
        findUser.save()
        return res.status(204).json({ cart: findUser._id });
      }
    }
    let arr = findUser.products.map((products) => products);
    arr.push(products);
    findUser.products = arr;
    findUser.save();
    return res.status(204).json({ cart: findUser._id });

  } else {
    const cart = await CartModel.create({ user: userid, products });
    return res.status(201).json({ cart: cart._id });
  }
};
module.exports.getCart = async (req, res) => {
  console.log("cartProductTrue :::");

  const cartProductTrue = await CartModel.findOne({
    user: req.body.user.id,
  });
  console.log("cartProductTrue :::", cartProductTrue);

  return res.status(200).json(cartProductTrue);
};

module.exports.totalCount = async (req, res) => {
  const cartProductTrue = await CartModel.findOne({
    user: req.body.user.id,
  });
  let totalCount = null;
  if (cartProductTrue) {
    totalCount = cartProductTrue.products.reduce((total, { quantity }) => {
      total = parseInt(quantity) + total;
      return total;
    }, 0);
  }
  return res.status(200).json({ totalCount });
};

module.exports.increaseproductquantity = async (req, res) => {
  let id = req.params.id;
  console.log("id ::", id);

  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });

  if (cartProduct) {
    for (let i = 0; i < cartProduct.products.length; i++) {
      if (cartProduct.products[i]._id == id) {
        cartProduct.products[i].quantity =
          parseInt(cartProduct.products[i].quantity) + 1;
        cartProduct.save();
      }
    }
  }

  return res.status(204).json({ data: cartProduct });
};

module.exports.decreaseproductquantity = async (req, res) => {
  let { index } = req.body;
  let id = req.params.id;
  console.log("id ::", id);

  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });
  if (cartProduct) {
    for (let i = 0; i < cartProduct.products.length; i++) {
      if (
        cartProduct.products[i]._id == id &&
        cartProduct.products[i].quantity > 0
      ) {
        cartProduct.products[i].quantity =
          parseInt(cartProduct.products[i].quantity) - 1;
        cartProduct.save();
      }
    }
  }

  return res.status(204).json({ data: cartProduct });
};

module.exports.deleteproductquantity = async (req, res) => {
  let id = req.params.id;
  console.log("id ::", id);

  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });
  if (cartProduct) {
    const temp = cartProduct.products.filter(({ _id }) => _id != id);
    cartProduct.products = temp;
    cartProduct.save();
  }

  return res.status(202).json({ data: cartProduct });
};
