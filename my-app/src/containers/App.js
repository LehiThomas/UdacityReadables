import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "../App.css";

import SideBar from "../components/SideBar";
import PostListContainer from "./PostListContainer";
import PostDetailsContainer from "./PostDetailsContainer";
import PostFormContainer from "./PostFormContainer";
import PageNotFoundContainer from "./PageNotFoundContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={PostListContainer} />
            <Route exact path="/404" component={PageNotFoundContainer} />
            <Route exact path="/EditPost/:id" component={PostFormContainer} />
            <Route exact path="/:category" component={PostListContainer} />
            <Route
              exact
              path="/:category/:id"
              component={PostDetailsContainer}
            />
            <Route path="*" component={PageNotFoundContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
