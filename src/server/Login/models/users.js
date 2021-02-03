const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please Enter an Email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please insert valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password"],
    minlength: [6, "Password should be morethan 6 character"],
  },
});

userSchema.post('save',function(doc , next){
    console.log('new user created and saved to DB:::',doc)
})
userSchema.pre ('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
const user = mongoose.model("user", userSchema);

module.exports = user;
