// import { GET_POSTS, GET_POST } from "../config/consts";

const initialState = {
  fetching: false,
  fetched: false,
  post: {},
  error: null
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_PENDING": {
      return { ...state, fetching: true };
    }
    case "FETCH_POST_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        post: action.payload
      };
    }
    case "FETCH_POST_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default PostReducer;
