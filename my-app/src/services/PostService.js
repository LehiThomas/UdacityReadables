import axios from "axios";
import { API, HEADER } from "../config/consts";
import { getPostsAxios } from "../actions/posts";
import store from "../config/store";
import UtilService from "./UtilService";

class PostService {
  axiosPosts = async category => {
    let url;
    if (category) {
      url = `${API}/${category}/posts`;
    } else {
      url = `${API}/posts`;
    }
    return await axios(url, { headers: HEADER });
  };

  axiosPost = id => {
    return axios(`${API}/posts/${id}`, { headers: HEADER });
  };

  axiosVotePost = async (id, option) => {
    return await axios.post(
      `${API}/posts/${id}`,
      { option: option },
      { headers: HEADER }
    );
  };

  axiosCreatePost = async post => {
    await axios
      .post(
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
      )
      .then(() => store.dispatch(getPostsAxios(post.category)));
  };

  axiosDeletePost = async post => {
    await axios
      .delete(`${API}/posts/${post.id}`, {
        headers: HEADER
      })
      .then(() => store.dispatch(getPostsAxios(post.category)));
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
    getPostsAxios();
  };
}

export default new PostService();
