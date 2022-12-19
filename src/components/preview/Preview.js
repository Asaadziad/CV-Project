import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.data = { ...this.props.data };
  }

  render() {
    return <div>{console.log(this.data.firstName)}</div>;
  }
}

export default Preview;
