import { createStore } from "redux";
import authReducers from "./reducers/login";

const store = createStore(authReducers);

export default store;