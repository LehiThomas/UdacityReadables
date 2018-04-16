import React, { Component } from "react";
import { connect } from "react-redux";
import { Divider } from "material-ui";

import PostDetails from "../components/PostDetails";
import CommentContainer from "./CommentContainer";
import { getPostAxios } from "../actions/posts";

class PostDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.getPost(id);
    }
  }

  reroute = route => {
    this.props.history.push(`/${route}`);
  };

  renderDetails = () => {
    const postObj = this.props.post;
    if (postObj.fetching === true) {
      return <div>Loading...</div>;
    } else if (postObj.fetching === false && postObj.fetched === true) {
      const post = this.props.post.post.data;
      return (
        <div>
          <PostDetails reroute={this.reroute} post={post} />
          <Divider />
          <CommentContainer id={post.id} />
        </div>
      );
    }
    // else {
    //   this.reroute("404");
    // }
  };

  render() {
    return <div>{this.renderDetails()}</div>;
  }
}

const mapStateToProps = ({ postReducer }) => ({
  post: postReducer
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPostAxios(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PostDetailContainer
);
