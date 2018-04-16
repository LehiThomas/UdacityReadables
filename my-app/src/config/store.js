import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, promise(), logger);
const store = createStore(reducers, middleware);

export default store;
