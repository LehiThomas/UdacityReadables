import React, { Component } from "react";
import { Paper, Typography } from "material-ui";

// import PostDetails from "../components/PostDetails";
// import PostService from "../services/PostService";
// import CommentContainer from "./CommentContainer";

class PageNotFoundContainer extends Component {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <Paper>
          <Typography variant="headline" component="h2">
            Page Not Found. Sorry.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default PageNotFoundContainer;
