import { type } from "../action/typeOfAction";

const initialState = {
  quantity: 0,
};

export const addToCart = (state = initialState, action) => {
  console.log("in reducer", type.addToCart);
  switch (action.type) {
    
    case type.addToCart: {
  console.log("in reducer ::::::::", type);

      return {
        ...state,
        quantity:  parseInt(action.payLoad),
      };
    }

    default:
      return state;
  }
};
