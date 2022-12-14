import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./AuthReducer/reducer";

// NOTE: use this store variable to create a store.
const store =legacy_createStore(reducer,applyMiddleware(thunk))
export { store };


