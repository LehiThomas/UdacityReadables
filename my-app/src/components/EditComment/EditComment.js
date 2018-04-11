import React, { Component } from "react";
import { TextField, Button } from "material-ui";

import CommentService from "../../services/CommentService";

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      body: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updateComment = () => {
    const comment = {
      author: this.state.author,
      body: this.state.body,
      parentId: this.props.parentId
    };

    CommentService.axiosUpdateComment(comment);
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
            Add Comment
          </Button>
        </form>
      </div>
    );
  }
}

export default EditComment;
