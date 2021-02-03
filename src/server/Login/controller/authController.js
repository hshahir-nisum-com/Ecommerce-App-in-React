const mongoose = require("mongoose");
// const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const handleErr = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  if (err.code === 11000){
    errors.email = "Email is already Registered!!!"
    return errors
  }
  if (err.message.includes('user validation failed')){
      Object.values(err.errors).forEach(({properties})=>{
          errors[properties.path] =properties.message
      })
  }
  return errors
};

module.exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (err) {
    const errors =handleErr(err);
    res.status(400).json(errors);
  }
};


module.exports.login = (req, res) => {
  res.send("login request");
};
