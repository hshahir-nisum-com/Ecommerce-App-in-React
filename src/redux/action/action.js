import { type } from "./typeOfAction";

export const userNamePassword = (usr)=>{
    return {
        type : type.userNamePassword,
        payLoad : usr
        
    }   
}

export const addtocart = (data)=>{
    return {
        type : type.addToCart,
        payLoad : data,
        
    }   
}

export const fetchedData = (data)=>{
    return {
        type : type.fetchedData,
        payLoad : data,
    
    }   
}
