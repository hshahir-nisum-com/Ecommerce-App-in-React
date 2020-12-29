import { type } from "./typeOfAction";

export const userNamePassword = (usr)=>{
    return {
        type : type.userNamePassword,
        payLoad : usr
        
    }   
}
