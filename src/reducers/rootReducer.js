import { combineReducers } from "redux";
import roomsReducer from './roomsReducer'
import userReducer from './userReducer'

export default combineReducers({
  roomsReducer,
  userReducer
  })
