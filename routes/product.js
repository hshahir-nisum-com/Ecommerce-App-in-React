const router = require("express").Router();
const Product = require("../models/dataModel");
const {
  products
} = Product
//getData
router.get("/get", async function (req, res) {
  let getDatas = await products.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "categoryID",
        as: "category",
      },
    }, {
      $unwind: "$category"
  },
  ]);
    
  res.send(getDatas);
});

module.exports = router;
