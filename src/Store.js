import { createStore } from "redux";
import rootReducer from "./reducer";
//creating Store
const Store=createStore(rootReducer);
export default Store;