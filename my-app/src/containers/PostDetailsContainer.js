import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider } from "material-ui";

import PostDetails from "../components/PostDetails";
import PostService from "../services/PostService";
import CommentContainer from "./CommentContainer";

class PostDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    PostService.axiosPost(id);
  }

  reroute = route => {
    this.props.history.push(`/${route}`);
  };

  render() {
    const post = this.props.post;
    return (
      <div>
        {post !== undefined && (
          <div>
            <PostDetails reroute={this.reroute} post={post} />
            <Divider />
            <CommentContainer id={post.id} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ postReducer }) => ({
  post: postReducer
});

export default connect(mapStateToProps)(PostDetailContainer);
