import { type } from "../action/typeOfAction";

const initialState = {
  item: [],
};

export const cartItem = (state = initialState, action) => {
  console.log("in reducer", action.payLoad);
  switch (action.type) {
    
    case type.cartItem: {
  console.log("in reducer ::::::::", type);
      const temp = [...state.item]
      temp.push(action.payLoad)
      return {
        ...state,
        item:  temp,
      };
    }

    default:
      return state;
  }
};
