const mongoose = require("mongoose");

const checkOut = new mongoose.Schema(
  {
    cartid: { type: mongoose.Schema.ObjectId, ref: "Cart" },
    userid: { type: mongoose.Schema.ObjectId, ref: "user" },
    buyer : {
        buyerName : String,
        buyerEmail : String,
        buyerAddress : String
    },
    products: 
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
      },
    payment : {
      CVV: String,
      cardTitle : String,
      cardNumber : String,
    },
    
    PurchasedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


const checkOutModel = mongoose.model("checkout", checkOut);
module.exports = checkOutModel 
