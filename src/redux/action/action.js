import { type } from "./typeOfAction";

export const userNamePassword = (usr) => {
  return {
    type: type.userNamePassword,
    payLoad: usr,
  };
};

export const addtocart = (data) => {
  return {
    type: type.addToCart,
    payLoad: data,
  };
};

export const fetchedData = (data) => {
  return {
    type: type.fetchedData,
    payLoad: data,
  };
};

export const signup = (data) => {
  console.log("data username", data);
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
