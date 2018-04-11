import { GET_POSTS, GET_POST } from "../config/consts";

const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case GET_POST:
      return action.post;
    default:
      return state;
  }
};

export default PostReducer;
