import { GET_COMMENTS, GET_COMMENT } from "../config/consts";

const CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };
    case GET_COMMENT:
      return action.comment;
    default:
      return state;
  }
};

export default CommentReducer;
