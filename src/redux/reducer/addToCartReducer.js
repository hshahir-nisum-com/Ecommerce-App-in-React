import { type } from "../action/typeOfAction";

const initialState = {
  name: "",
  quantity: 0,
  price: 0,
  totalPrice: 0,
  id: 0,
};

export const addToCart = (state = initialState, action) => {
  console.log("in reducer", action.payLoad);
  switch (action.type) {
    case type.addToCart: {
      return {
        ...state,
        name: action.payLoad.productDetail.title,
        quantity: state.quantity + action.payLoad.quantity,
        price: parseInt(action.payLoad.productDetail.price),
        totalPrice:
          parseInt(action.payLoad.productDetail.price) *
          (state.quantity + action.payLoad.quantity),
        id: action.payLoad.productDetail.id,
      };
    }
    default:
      return state;
  }
};
