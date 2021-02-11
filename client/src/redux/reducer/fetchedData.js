import { type } from "../action/typeOfAction";


const initialState = {
  data :[]
};

 export   const fetchedData = (state=initialState, action) => {

   switch (action.type) {
     case type.fetchedData: {
       return {
           ...state,
         data:  action.payLoad
       };
     }
     default:
       return state;
   }
 };