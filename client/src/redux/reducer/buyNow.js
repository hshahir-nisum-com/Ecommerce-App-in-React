
import { type } from "../action/typeOfAction";


const initialState = {
  name : "",
  address : "",
  product : [],
  TotalPrice : 0,
  cardType : "",
  CardHolderName : "",
};

 export  const addToCart = (state=initialState, action) => {

   switch (action.type) {
     case type.addToCart: {
       return {
         ...state,
           name : action.payLoad.productDetail.title,
           quantity : state.quantity + action.payLoad.quantity,
           price : parseInt(action.payLoad.productDetail.price),
           totalPrice : parseInt(action.payLoad.productDetail.price) * (state.quantity + action.payLoad.quantity),
           id : action.payLoad.id,
       };
     }
     default:
       return state;
   }
 };