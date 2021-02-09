const jwt = require("jsonwebtoken");
const userModel = require("../models/authModel");

const handleErr = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    oldPassword : "",
    password: "",
  };

  // incorrect email
  if (err.message === "Incorrect Email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }
  if(err.message === "incorrect Old Password"){
    errors.oldPassword = "Old password is incorrect";
  }
  if (err.code === 11000) {
    errors.email = "Email is already Registered!!!";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const secret = "first-token-app";
const createToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  });
};

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userModel.create({ name, email, password });

    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, token });
  } catch (err) {
    const errors = handleErr(err);
    res.status(400).json(errors);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user, jwt: token });
  } catch (err) {
    const errors = handleErr(err);
    res.status(400).json(errors);
  }
  res.send("login request");
};

module.exports.reset = async (req, res) => {
  const { email, oldPassword, newpassword } = req.body;
  try {
    const user = await userModel.forgetPass(email, oldPassword, newpassword);
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleErr(err);
    res.status(400).json(errors);
  }
};

module.exports.me = async (req, res) => {
  const { user, DOB, location } = req.body;

  try {
    const user = await User.profile(user._id, DOB, location);
   return res.status(200).json({ user });
  } catch (err) {
    const errors = handleErr(err);
   return res.status(400).json(errors);
  }

};
