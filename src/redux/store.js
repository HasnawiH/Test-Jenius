import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import contactReducer from "./reducers/contactReducer";

const rootReducers = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducers);

export default store;
