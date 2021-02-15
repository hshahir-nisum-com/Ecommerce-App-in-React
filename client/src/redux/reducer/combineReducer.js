import {cartItem} from './addToCartReducer';
import {userName} from './userName';
import { combineReducers } from 'redux'
import {fetchedData} from './fetchedData';
import {userList} from './signupReducer'
import {buyNow} from './buyNow'

const rootReducer = combineReducers({
   cartItem,
    userName,
    fetchedData,
    userList,
    buyNow
 })
    
    export default rootReducer;