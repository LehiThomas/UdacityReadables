import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "material-ui";

import PostService from "../services/PostService";
import PostForm from "../components/PostForm";

class PostDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    PostService.axiosPost(id);
  }

  render() {
    const post = this.props.post;
    return (
      <div>
        {post.id !== undefined && (
          <div>
            <h2>Edit Post</h2>
            <PostForm post={post} />
            <Button variant="raised" color="secondary">
              <Link to={`/`} style={{ color: "#000", textDecoration: "none" }}>
                Cancel
              </Link>
            </Button>
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
