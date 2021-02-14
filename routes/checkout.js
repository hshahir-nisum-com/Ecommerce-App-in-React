const router = require("express").Router();
const userController = require("../controller/authController");
const tokenAuth = require("../middlewares/index");

// Register a new User
router.post("/register", userController.register);

// Login
router.post("/login", userController.login);

// forgetPass
router.put("/reset", userController.reset);

//profile
router.put("/me", tokenAuth, userController.me);

module.exports = router;