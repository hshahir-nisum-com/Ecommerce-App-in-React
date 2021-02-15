const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "user" },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    ],
    createdOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model("Cart", CartSchema);
module.exports = CartModel;
