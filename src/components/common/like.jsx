import React, { Component } from "react";

class Like extends Component {
  render() {
    const { liked, onClick } = this.props;

    let classes = "fa-heart ";
    if (liked) classes += "fas";
    else classes += "far";

    return (
      <i className={classes} style={{ cursor: "pointer" }} onClick={onClick} />
    );
  }
}

export default Like;
