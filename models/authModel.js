const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter your Name"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "please Enter an Email"],
    lowercase: true,
    validate: [isEmail, "please insert valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter a Password"],
    minlength: [6, "Password should be morethan 6 character"],
  },
  DOB: {
    type: String,
    lowercase: true,
  },
  location: {
    type: String,
    lowercase: true,
  },
});



userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("Incorrect Email");
};

userSchema.statics.forgetPass = async function (
  email,
  oldPassword,
  newpassword
) {
  const userFound = await this.findOne({ email });
  if (userFound) {
    const auth = await bcrypt.compare(oldPassword, userFound.password);
    if (auth) {
      if(newpassword){
        userFound.password = newpassword;
        const userUpdate = await userFound.save();;
      return userUpdate;
    }
    throw Error("incorrect password");

    }
    throw Error("incorrect Old Password");
  }
  throw Error("Incorrect Email");
};

userSchema.statics.profile = async function (userId, DOB, location) {
  const user = await this.findOne({ _id: userId });
  if (user) {
    const userUpdate = await this.update(
      { _id: userId },
      { DOB, location },
      { new: true } 
    );
    console.log("user :::::::", userUpdate);
    return userUpdate;
  }
  throw Error("Incorrect Email");
};


//creating a model
const userModel = mongoose.model("user", userSchema);


module.exports = userModel