import React, { Component } from "react";
import EducationPreview from "./EducationPreview";
import PersonalPreview from "./PersonalPreview";
import PracticalPreview from "./PracticalPreview";

class CVPreview extends Component {
  render() {
    return (
      <div>
        <PersonalPreview personalInfo={this.props.personalInfo} />
        <PracticalPreview practicalInfo={this.props.practicalInfo} />
        <EducationPreview educationInfo={this.props.educationInfo} />
      </div>
    );
  }
}

export default CVPreview;
