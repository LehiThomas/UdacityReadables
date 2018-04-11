import axios from "axios";
import store from "../config/store";
import { API, HEADER } from "../config/consts";
import { getPosts, getPost } from "../actions/posts";

import UtilService from "./UtilService";

class PostService {
  axiosPosts = async category => {
    let url;
    if (category) {
      url = `${API}/${category}/posts`;
    } else {
      url = `${API}/posts`;
    }
    const res = await axios(url, { headers: HEADER });
    store.dispatch(getPosts(res.data));
  };

  axiosPost = async id => {
    const res = await axios(`${API}/posts/${id}`, { headers: HEADER });
    store.dispatch(getPost(res.data));
  };

  axiosVotePost = async (id, option) => {
    const res = await axios.post(
      `${API}/posts/${id}`,
      { option: option },
      { headers: HEADER }
    );
    this.axiosPost(res.data.id);
  };

  axiosVotePostList = async (id, option) => {
    await axios.post(
      `${API}/posts/${id}`,
      { option: option },
      { headers: HEADER }
    );
    this.axiosPosts();
  };

  axiosCreatePost = async post => {
    await axios.post(
      `${API}/posts`,
      {
        id: UtilService.createUniqueId(),
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category,
        timestamp: Date.now()
      },
      { headers: HEADER }
    );
    this.axiosPosts();
  };

  axiosDeletePost = async id => {
    await axios.delete(`${API}/posts/${id}`, {
      headers: HEADER
    });
    this.axiosPosts();
  };

  axiosEditPost = async post => {
    await axios.put(
      `${API}/posts/${post.id}`,
      {
        id: post.id,
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category,
        timestamp: post.timestamp,
        voteScore: post.voteScore
      },
      { headers: HEADER }
    );
    this.axiosPosts();
  };
}

export default new PostService();
