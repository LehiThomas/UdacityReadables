import React, { Component } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel
} from "material-ui";

import PostService from "../../services/PostService";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      body: "",
      category: "react",
      buttonText: "Create Post",
      edit: false
    };
  }

  componentDidMount() {
    if (this.props.post) {
      const { post } = this.props;
      this.setState({
        title: post.title,
        author: post.author,
        body: post.body,
        category: post.category,
        buttonText: "Edit Post",
        edit: true
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleRadioChange = event => {
    this.setState({ category: event.target.value });
  };

  createPost = () => {
    if (this.state.edit) {
      const post = {
        ...this.props.post,
        title: this.state.title,
        author: this.state.author,
        body: this.state.body,
        category: this.state.category
      };
      PostService.axiosEditPost(post);
    } else {
      PostService.axiosCreatePost(this.state);
    }
    this.setState({
      title: "",
      author: "",
      body: "",
      category: "react",
      buttonText: "Create Post",
      edit: false
    });
  };

  render() {
    return (
      <div style={{ marginBottom: 5 }}>
        <form>
          <div style={{ float: "left", marginRight: 15 }}>
            <TextField
              id="title"
              label="Title"
              value={this.state.title}
              onChange={this.handleChange("title")}
              margin="none"
            />
            <br />
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
          </div>
          <FormLabel component="legend">Category</FormLabel>
          <RadioGroup
            aria-label="category"
            name="category"
            value={this.state.category}
            onChange={this.handleRadioChange}
          >
            <FormControlLabel
              value="react"
              control={<Radio color="primary" />}
              label="react"
            />
            <FormControlLabel
              value="redux"
              control={<Radio color="primary" />}
              label="redux"
            />
            <FormControlLabel
              value="udacity"
              control={<Radio color="primary" />}
              label="udacity"
            />
          </RadioGroup>
          <br />
          <div style={{ marginRight: 10, clear: "left" }}>
            <Button variant="raised" color="primary" onClick={this.createPost}>
              {this.state.buttonText}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
