const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.ObjectId, ref: "user" },

    products: 
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


const CartModel = mongoose.model("Cart", CartSchema);
module.exports = CartModel 
