import { GET_COMMENTS, GET_COMMENT } from "../config/consts";

export const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

export const getComment = comment => {
  return {
    type: GET_COMMENT,
    comment
  };
};
