import { type } from "../action/typeOfAction";

const initialState = {
  items: [],
  totalCount: null,
};

export const cartItem = (state = initialState, action) => {
  let temp =
  action.payLoad?  action.payLoad.count == 0
      ? (action.payLoad.count = null)
      : action.payLoad.count : null

  switch (action.type) {
    case type.cartItem: {
      return {
        ...state,
        items: action.payLoad.item,
        totalCount: action.payLoad.count,
      };
    }

    default:
      return state;
  }
};
