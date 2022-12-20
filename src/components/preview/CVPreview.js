import React, { Component } from "react";
import PersonalPreview from "./PersonalPreview";
import PracticalPreview from "./PracticalPreview";

class CVPreview extends Component {
  render() {
    return (
      <div>
        <PersonalPreview personalInfo={this.props.personalInfo} />
        <PracticalPreview practicalInfo={this.props.practicalInfo} />
      </div>
    );
  }
}

export default CVPreview;
