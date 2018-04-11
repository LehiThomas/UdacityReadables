import { GET_POSTS, GET_POST } from "../config/consts";

export const getPosts = posts => {
  return {
    type: GET_POSTS,
    posts
  };
};

export const getPost = post => {
  return {
    type: GET_POST,
    post
  };
};
