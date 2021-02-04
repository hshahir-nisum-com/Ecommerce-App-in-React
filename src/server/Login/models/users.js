const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please Enter an Email"],
    lowercase: true,
    validate: [isEmail, "please insert valid email"],
    unique : true ,
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password"],
    minlength: [6, "Password should be morethan 6 character"],
  },
});


userSchema.pre ('save',async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

userSchema.statics.login = async function (email, password){
  const user = await this.findOne ({email });
  if (user){
    const auth = await bcrypt.compare(password, user.password)
    if (auth){
      return user
    }
    throw Error ('incorrect password')
  }
  throw Error("Incorrect Email")
}



const user = mongoose.model("user", userSchema);

module.exports = user;
