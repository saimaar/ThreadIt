import { combineReducers } from "redux";
import itemsReducer from './itemReducers'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

//here we setting the key of the state as items
const rootReducer = combineReducers({
  items: itemsReducer,
  userInfo: userReducer,
  totalcartAmount: cartReducer

});









export default rootReducer;
