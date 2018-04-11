import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Typography, Button } from "material-ui";

import VoteBox from "../VoteBox";
import CommentService from "../../services/CommentService";

class CommentListItem extends Component {
  updateScore = vote => {
    const { comment } = this.props;

    CommentService.axiosVoteCommentList(comment.id, vote);
  };

  deleteComment = () => {
    CommentService.axiosDeleteComment(this.props.comment);
  };

  render() {
    const { comment } = this.props;
    return (
      <Paper elevation={2} style={{ padding: 15, marginBottom: 20 }}>
        <VoteBox updateScore={this.updateScore} score={comment.voteScore} />
        <div>
          <Typography>{comment.author}</Typography>
          <Typography>{comment.body}</Typography>
          <div>
            <Button
              color="primary"
              onClick={() => this.props.editComment(comment)}
            >
              Edit
            </Button>
            <Button color="secondary" onClick={this.deleteComment}>
              DELETE
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(CommentListItem);
