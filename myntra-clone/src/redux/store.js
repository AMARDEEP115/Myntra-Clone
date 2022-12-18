import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import {Homereducer} from "./reducer"
import { Womensreducer } from "./Womensreducer";
import { MensReducer } from "./MensReducer";
import {reducer as WishReducer} from "./Wishlist/reducer";
import {reducer as CartReducer} from "./Cart/reducer";
const rootreducer = combineReducers({
  home: Homereducer,womendata:Womensreducer,mensdata:MensReducer,WishReducer,CartReducer
});

export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
