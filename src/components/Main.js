import React, { Component } from "react";
import Education from "./forms/Education";
import Personal from "./forms/Personal";
import Practical from "./forms/Practical";

class Main extends Component {
  render() {
    return (
      <div>
        <Personal />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default Main;
