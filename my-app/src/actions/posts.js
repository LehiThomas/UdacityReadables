// import { GET_POSTS, GET_POST } from "../config/consts";

import PostService from "../services/PostService";

export const getPostsAxios = category => dispatch => {
  return dispatch({
    type: "FETCH_POSTS",
    payload: PostService.axiosPosts(category)
  });
};

export const getPostAxios = id => dispatch => {
  return dispatch({
    type: "FETCH_POST",
    payload: PostService.axiosPost(id)
  });
};

export const votePost = (id, option, category) => dispatch => {
  return PostService.axiosVotePost(id, option).then(res =>
    dispatch({ type: "FETCH_POSTS", payload: PostService.axiosPosts(category) })
  );
};

export const votePostDetail = (id, option) => dispatch => {
  return PostService.axiosVotePost(id, option).then(res =>
    dispatch({ type: "FETCH_POST", payload: PostService.axiosPost(id) })
  );
};
