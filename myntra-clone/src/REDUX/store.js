import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Womensreducer } from "./Womensreducer";
import { MensReducer } from "./MensReducer";

const rootReducer=combineReducers({womendata:Womensreducer,mendata:MensReducer
})


const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store}