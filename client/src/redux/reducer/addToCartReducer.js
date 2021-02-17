import { type } from "../action/typeOfAction";

const initialState = {
  items: [],
  totalCount : null
};

export const cartItem = (state = initialState, action) => {

  switch (action.type) {
      
    case type.cartItem: {

      return {
        ...state,
        items:  action.payLoad.item,
        totalCount : action.payLoad.count
      };
    }

    default:
      return state;
  }
};
