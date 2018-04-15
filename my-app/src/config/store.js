import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd(action.type);
//   return result;
// };

const middleware = applyMiddleware(thunk, promise(), logger);
const store = createStore(reducers, middleware);

export default store;
