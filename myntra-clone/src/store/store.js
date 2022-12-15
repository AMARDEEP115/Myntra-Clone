import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import {Homereducer} from "../redux/Home/reducer"

const rootreducer = combineReducers({
  home: Homereducer,
});

export const store = createStore(rootreducer, compose(applyMiddleware(thunk)));
