const router = require("express").Router();
const path = require("path");

//base path
router.get("*", function (req, res) {
  let dir = path.join(__dirname, "../../client/build/index.html");
  console.log(":::::::::", dir);
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

module.exports = router;
