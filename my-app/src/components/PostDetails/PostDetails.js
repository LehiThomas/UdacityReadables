import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Paper, Typography, Button } from "material-ui";

import VoteBox from "../VoteBox";
import PostService from "../../services/PostService";

class PostDetails extends Component {
  updateScore = vote => {
    const { post } = this.props;
    PostService.axiosVotePost(post.id, vote);
  };

  deletePost = () => {
    const { post } = this.props;
    PostService.axiosDeletePost(post.id);
    this.props.reroute("");
  };

  componentDidMount() {
    if (Object.keys(this.props.post).length === 0) {
      this.props.reroute("404");
    }
  }

  render() {
    const { post } = this.props;
    return (
      <Paper elevation={4} style={{ padding: 15, marginBottom: 20 }}>
        <VoteBox updateScore={this.updateScore} score={post.voteScore} />
        <div>
          <Typography variant="headline" component="h2">
            {post.title} by {post.author}
          </Typography>
          <Typography>{post.body}</Typography>
          <div>
            <Typography>{post.commentCount} COMMENTS</Typography>
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

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(PostDetails);
