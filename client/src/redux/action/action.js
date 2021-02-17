import { type } from "./typeOfAction";

export const userNamePassword = (usr) => {
  return {
    type: type.userNamePassword,
    payLoad: usr,
  };
};

export const fetchedData = (data) => {
  return {
    type: type.fetchedData,
    payLoad: data,
  };
};

export const signup = (data) => {
  return {
    type: type.SIGNUP,
    payLoad: { name: data.name, pass: data.pass },
  };
};

export const buyNow = (data) => {
  console.log("buy Now action", data);
  return {
    type: type.BUYNOW,
    payLoad: data,
  };
};

export const cartItems = (data) => {
  console.log("cartItem::::", data);
  return {
    type: type.cartItem,
    payLoad: data,
  };
};
