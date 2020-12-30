import { type } from "../action/typeOfAction";


const initialState = {
  userName: ""
};

 export   const userName = (state=initialState, action) => {
   switch (action.type) {
     case type.userNamePassword: {
       return {
           ...state,
         userName:  action.payLoad
       };
     }
     default:
       return state;
   }
 };