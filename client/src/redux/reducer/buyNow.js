import { type } from "../action/typeOfAction";

const initialState = {
  buyer: {
    buyerName: "",
    buyerEmail: "",
    buyerAddress: "",
  },
  products: {
    productId: 0,
    quantity: 0,
    name: "",
    price: 0,
  },
  payment: {
    CVV: "",
    cardTitle: "",
    cardNumber : ""
  },
};

export const buyNow = (state = initialState, action) => {
  console.log("buyNowreducer ", action)
  switch (action.type) {
    case type.buyNow: {
      return {
        ...state,
        buyer: {
          ...state.buyer,
          buyerName: action.payLoad.buyerName,
          buyerEmail: action.payLoad.buyerEmail,
          buyerAddress: action.payLoad.buyerAddress,
        },
        products: {
          ...state.products,
          productId: action.payLoad.productId,
          quantity: action.payLoad.quantity,
          name: action.payLoad.productName,
          price: action.payLoad.price,
        },
        payment: {
          ...state.payment,
          CVV: action.payLoad.CVV,
          cardTitle : action.payLoad.cardTitle,
          cardNumber : action.payLoad.cardNumber,
        },
      };
    }
    default:
      return state;
  }
};
