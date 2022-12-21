import React, { Component } from "react";
import "./preview.css";
class EducationPreview extends Component {
  render() {
    const info = { ...this.props.educationInfo };
    const { universityName, city, degree, subject, from, to } = info;

    return (
      <div>
        <h2 className="itemTitle">Education</h2>
        <div className="itemBody">
          <div>
            {from} - {to}
          </div>
          <div>
            <h3>
              {universityName},{city}
            </h3>
            <p>Degree: {degree}</p>
            <p>Subject: {subject}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationPreview;
