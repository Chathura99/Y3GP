import { legacy_createStore } from "redux";
//import rootReducer from "./reducers/index";
import rootReducer from "./reducers";
//reducers->auth.js + index.js
const store =legacy_createStore(rootReducer);

export default store;