// Importing the addUser reducer
import addUser from "./addUsers";
// Importing the combineReducers function from the redux library
import { combineReducers } from "redux";
// Combining the addUser reducer with other reducers if any
const rootReducer=combineReducers({addUser});
export default rootReducer;