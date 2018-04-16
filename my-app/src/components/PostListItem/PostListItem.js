import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Paper, Typography, Button } from "material-ui";

import VoteBox from "../VoteBox";
import PostService from "../../services/PostService";
import { votePost, getPostsAxios } from "../../actions/posts";

class PostListItem extends Component {
  updateScore = vote => {
    const { post } = this.props;
    this.props.votePost(post.id, vote, this.props.category);
  };

  deletePost = () => {
    const { post } = this.props;
    PostService.axiosDeletePost(post);
    this.props.getPosts(this.props.category);
  };

  render() {
    console.log("category", this.props);
    const { post } = this.props;
    return (
      <Paper elevation={4} style={{ padding: 15, marginBottom: 20 }}>
        <VoteBox updateScore={this.updateScore} score={post.voteScore} />
        <div>
          <Typography variant="headline" component="h2">
            <Link to={`/${post.category}/${post.id}`} style={{ color: "#000" }}>
              {post.title}
            </Link>{" "}
            by {post.author}
          </Typography>
          <div>
            <Typography variant="subheading" component="h6">
              {post.commentCount} COMMENTS
            </Typography>
            <Button color="primary">
              <Link
                to={`/EditPost/${post.id}`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                Edit
              </Link>
            </Button>
            <Button color="secondary" onClick={this.deletePost}>
              DELETE
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  votePost: (id, option, category) => dispatch(votePost(id, option, category)),
  getPosts: category => dispatch(getPostsAxios(category))
});

export default connect(null, mapDispatchToProps)(PostListItem);
