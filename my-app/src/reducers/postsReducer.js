// import { GET_POSTS, GET_POST } from "../config/consts";

const initialState = {
  fetching: false,
  fetched: false,
  posts: [],
  error: null
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_PENDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_POSTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload
      };
    }
    case "FETCH_POSTS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default PostsReducer;
