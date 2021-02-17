import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from 'redux-logger';

import combinedReducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combinedReducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleWare)))