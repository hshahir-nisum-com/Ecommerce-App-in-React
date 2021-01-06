import {addToCart} from './addToCartReducer';
import {userName} from './userName';
import { combineReducers } from 'redux'
import {fetchedData} from './fetchedData';
import {userList} from './signupReducer'

console.log("combine reducer",addToCart)
const rootReducer = combineReducers({
    addToCart,
    userName,
    fetchedData,
    userList
 })
    
    export default rootReducer;