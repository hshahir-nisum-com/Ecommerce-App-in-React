const router = require("express").Router();
const path = require("path");

//base path
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

module.exports = router;
