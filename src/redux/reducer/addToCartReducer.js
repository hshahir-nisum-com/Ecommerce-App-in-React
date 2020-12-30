
import { type } from "../action/typeOfAction";


const initialState = {
  name : "",
  quantity : 0,
  price : 0,
  totalPrice : 0,
  id :"",
};

 export  const addToCart = (state=initialState, action) => {

   console.log("in reducer",action.payLoad)
   switch (action.type) {
     case type.addToCart: {
       return {
         ...state,
           name : action.payLoad.title,
           quantity : state.quantity +1,
           price : parseInt(action.payLoad.price),
           totalPrice : parseInt(action.payLoad.price) * (state.quantity + 1),
           id : action.payLoad.id,
       };
     }
     default:
       return state;
   }
 };