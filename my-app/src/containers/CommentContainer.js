import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "material-ui";

import AddComment from "../components/AddComment";
import CommentListItem from "../components/CommentListItem";
import CommentService from "../services/CommentService";

class CommentContainer extends Component {
  constructor() {
    super();

    this.state = {
      comment: {}
    };
  }

  componentDidMount() {
    CommentService.axiosComments(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      const id = nextProps.id;
      CommentService.axiosComments(id);
    }
  }

  editComment = comment => {
    this.setState({
      comment
    });
  };

  clearComment = () => {
    this.setState({
      comment: {}
    });
  };

  displayComments = comments => {
    if (comments !== undefined) {
      return (
        <div>
          {comments.map((comment, index) => (
            <CommentListItem
              editComment={this.editComment}
              comment={comment}
              key={`${comment} + ${index}`}
            />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    const { comments } = this.props;
    return (
      <div style={{ flexGrow: 1, marginTop: 10 }}>
        <AddComment
          clearComment={this.clearComment}
          comment={this.state.comment}
          parentId={this.props.id}
        />
        <br />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            {this.displayComments(comments)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ commentReducer }) => ({
  comments: commentReducer.comments
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
