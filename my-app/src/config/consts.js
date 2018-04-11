export const API = "http://localhost:3001";

let token = window.localStorage.token;
if (!token)
  token = window.localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

export const HEADER = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json"
};

export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENT = "GET_COMMENT";
