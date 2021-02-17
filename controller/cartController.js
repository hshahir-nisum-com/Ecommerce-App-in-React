const CartModel = require("../models/cart");

module.exports.addtocart = async (req, res) => {
  const { userid, products } = req.body;
  const findUser = await CartModel.findOne({
    user: userid,
  }).select("products");
  console.log("findUser::::", findUser);

  if (findUser) {
    let arr = findUser.products.map((products) => products);
    arr.push(products);
    findUser.products = arr;
    findUser.save();
    console.log("queryyyyy::::", arr);
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
  let { index } = req.body
  console.log("index :::",req.body.index)
  index = parseInt(index)
  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });
  if (cartProduct) {
    cartProduct.products[index].quantity = parseInt(cartProduct.products[index].quantity) + 1
    cartProduct.save() 
    };
  
  return res.status(204).json({ data : cartProduct });
};


module.exports.decreaseproductquantity = async (req, res) => {
  let { index } = req.body
  index = parseInt(index)
  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });
  if (cartProduct  && cartProduct.products[index].quantity > 0 ) {
    cartProduct.products[index].quantity = parseInt(cartProduct.products[index].quantity) - 1
    cartProduct.save() 
    };
  
  return res.status(204).json({ data : cartProduct });
};

module.exports.deleteproductquantity = async (req, res) => {
  let id  = req.params.id
  console.log("id ::",id)

  const cartProduct = await CartModel.findOne({
    user: req.body.user.id,
  });
  if (cartProduct ) {
    const temp = cartProduct.products.filter(({_id})=> _id != id)
    cartProduct.products = temp 
    cartProduct.save() 
    };
  
  return res.status(202).json({ data : cartProduct });
};
