module.exports.addtocart = async  (req, res) => {
    const { userid, products } = req.body;
    const findUser = await CartModel.findOne({
      user : userid
    }).select('products');
    console.log("findUser::::",findUser)
  
    if(findUser){
      let arr = findUser.products.map((products) => products)
      arr.push(products)
      findUser.products = arr
      findUser.save()
      console.log("queryyyyy::::",arr)
    }
    else{
    const cart = await CartModel.create({ user :userid, products });
    return res.status(201).json({ cart: cart._id });
  }
  }