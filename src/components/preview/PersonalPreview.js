import React, { Component } from "react";
import "./preview.css";
class PersonalPreview extends Component {
  render() {
    const info = { ...this.props.personalInfo };
    const { firstName, lastName, Email, pNumber } = info;
    return (
      <div>
        <header className="container nameContainer">
          <h1>
            {firstName} {lastName}
          </h1>
          <h6>Email: {Email}</h6>
          <h6>Phone number: {pNumber}</h6>
        </header>
      </div>
    );
  }
}

export default PersonalPreview;
