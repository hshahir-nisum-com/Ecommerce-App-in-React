const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  let decoded;
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    decoded = jwt.verify(token, "first-token-app");
    req.body.user = decoded;
    console.log("req ::::::::::::::::::::", req.body)
    next()
  } catch (e) {
    return res.status(401).send("unauthorized");
  }
};
