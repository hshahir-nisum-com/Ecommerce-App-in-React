import {createStore} from 'redux'
import {userNamePassword} from '../reducer/reducer'

const store = createStore(userNamePassword)

export default store;