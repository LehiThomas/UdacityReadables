import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import postReducer from "./postReducer";
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  categoryReducer,
  postReducer,
  postsReducer,
  commentReducer
});
