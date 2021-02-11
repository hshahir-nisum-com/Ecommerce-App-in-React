const router = require("express").Router();
const Product = require("../models/dataModel");

//getData
router.get("/get", async function (req, res) {
  let getDatas = await Product.find({});
  res.send(getDatas);
});

module.exports = router;
