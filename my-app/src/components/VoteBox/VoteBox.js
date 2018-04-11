import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";

class VoteBox extends Component {
  render() {
    return (
      <div
        style={{
          float: "left",
          width: 30,
          textAlign: "center",
          marginRight: 5
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.props.updateScore("upVote")}
        >
          <FontAwesome.FaArrowUp />
        </div>
        <div>{this.props.score}</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.props.updateScore("downVote")}
        >
          <FontAwesome.FaArrowDown />
        </div>
      </div>
    );
  }
}

export default VoteBox;
