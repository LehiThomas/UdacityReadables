import axios from "axios";
import store from "../config/store";
import { API, HEADER } from "../config/consts";
import { getComments, getComment } from "../actions/comments";

import UtilService from "./UtilService";

class CommentService {
  axiosComments = async id => {
    const res = await axios(`${API}/posts/${id}/comments`, { headers: HEADER });
    store.dispatch(getComments(res.data));
  };

  axiosComment = async id => {
    const res = await axios(`${API}/posts/${id}`, { headers: HEADER });
    store.dispatch(getComment(res.data));
  };

  axiosVoteCommentList = async (id, option) => {
    const res = await axios.post(
      `${API}/comments/${id}`,
      { option: option },
      { headers: HEADER }
    );
    this.axiosComments(res.data.parentId);
  };

  axiosPostComment = async data => {
    await axios.post(
      `${API}/comments`,
      {
        id: UtilService.createUniqueId(),
        body: data.body,
        author: data.author,
        timestamp: Date.now(),
        parentId: data.parentId
      },
      { headers: HEADER }
    );
    console.log("parentId: ", data);
    this.axiosComments(data.parentId);
  };

  axiosDeleteComment = async comment => {
    await axios.delete(`${API}/comments/${comment.id}`, {
      headers: HEADER
    });
    this.axiosComments(comment.parentId);
  };

  axiosEditComment = async comment => {
    await axios.put(
      `${API}/comments/${comment.id}`,
      {
        id: comment.id,
        body: comment.body,
        author: comment.author,
        timestamp: comment.timestamp,
        parentId: comment.parentId,
        voteScore: comment.voteScore
      },
      { headers: HEADER }
    );
    this.axiosComments(comment.parentId);
  };
}

export default new CommentService();
