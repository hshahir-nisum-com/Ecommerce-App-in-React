import { type } from "../action/typeOfAction";

const initialState = {
  userName: ["shahir"],
  pass: ["123"],
};

export const userList = (state = initialState, action) => {
    console.log("actionnnnnnnn",action.payLoad)
  
  switch (action.type) {
    case type.SIGNUP: {
      return {
        ...state,
        userName: [...state.userName,action.payLoad.name],
        pass: [...state.pass,action.payLoad.pass]
      };
    }
    default:
      return state;
  }
};
