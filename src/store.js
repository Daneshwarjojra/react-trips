import {createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer/rootReducer";

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;