import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "material-ui";

import PostListItem from "../components/PostListItem";
import PostForm from "../components/PostForm";

import PostService from "../services/PostService";
import UtilService from "../services/UtilService";

class PostListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      time: true,
      votes: false
    };
  }

  componentDidMount() {
    const category = this.props.match.params.category;
    PostService.axiosPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const category = nextProps.match.params.category;
      PostService.axiosPosts(category);
    }
  }

  handleChange = name => event => {
    this.setState({
      time: !event.target.checked,
      votes: !event.target.checked,
      [name]: event.target.checked
    });
  };

  sortPosts = posts => {
    if (this.state.time) {
      return UtilService.sortPostsByTime(posts);
    } else {
      return UtilService.sortPostsByVote(posts);
    }
  };

  displayPosts = posts => {
    if (posts !== undefined) {
      posts = this.sortPosts(posts);
      return (
        <div>
          {posts.map((post, index) => (
            <PostListItem post={post} key={post + index} />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  };

  showForm = () => {
    this.setState({
      showForm: this.state.showForm ? false : true
    });
  };

  render() {
    const { posts } = this.props;
    return (
      <div style={{ flexGrow: 1 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.time}
                onChange={this.handleChange("time")}
                value="time"
              />
            }
            label="Time"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.votes}
                onChange={this.handleChange("votes")}
                value="votes"
                color="primary"
              />
            }
            label="Votes"
          />
        </FormGroup>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            {this.displayPosts(posts)}
          </Grid>
        </Grid>
        {this.state.showForm ? (
          <div>
            <PostForm />
            <Button variant="raised" color="secondary" onClick={this.showForm}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button variant="raised" color="secondary" onClick={this.showForm}>
            Create Post
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ postReducer }) => ({
  posts: postReducer.posts
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
