import React, { Component } from "react";
import { TextField, Button } from "material-ui";

import CommentService from "../../services/CommentService";

class AddComment extends Component {
  constructor() {
    super();

    this.state = {
      author: "",
      body: "",
      buttonText: "Add Comment",
      edit: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comment.hasOwnProperty("id")) {
      const { comment } = nextProps;
      this.setState({
        author: comment.author,
        body: comment.body,
        buttonText: "Edit Comment",
        edit: true
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  postComment = () => {
    if (this.state.edit) {
      const comment = {
        ...this.props.comment,
        author: this.state.author,
        body: this.state.body
      };

      CommentService.axiosEditComment(comment);
    } else {
      const comment = {
        author: this.state.author,
        body: this.state.body,
        parentId: this.props.parentId
      };

      CommentService.axiosPostComment(comment);
    }
    this.setState({
      author: "",
      body: "",
      buttonText: "Add Comment",
      edit: false
    });
    this.props.clearComment();
  };

  render() {
    return (
      <div>
        <form>
          <TextField
            id="author"
            label="Author"
            value={this.state.author}
            onChange={this.handleChange("author")}
            margin="none"
          />
          <br />
          <TextField
            id="body"
            label="Comment"
            multiline
            rows="4"
            value={this.state.body}
            onChange={this.handleChange("body")}
            margin="none"
            style={{ width: 500, marginBottom: 10 }}
          />
          <br />
          <Button variant="raised" color="primary" onClick={this.postComment}>
            {this.state.buttonText}
          </Button>
        </form>
      </div>
    );
  }
}

export default AddComment;
