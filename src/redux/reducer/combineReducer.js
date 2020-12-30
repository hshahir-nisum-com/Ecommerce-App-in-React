import {addToCart} from './addToCartReducer';
import {userName} from './userName';
import { combineReducers } from 'redux'
import {fetchedData} from './fetchedData'

console.log("combine reducer",addToCart)
const rootReducer = combineReducers({
    addToCart,
    userName,
    fetchedData
 })
    
    export default rootReducer;