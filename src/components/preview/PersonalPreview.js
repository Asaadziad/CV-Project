import React, { Component } from "react";

class PersonalPreview extends Component {
  render() {
    const info = { ...this.props.personalInfo };
    const { firstName, lastName, Email, pNumber } = info;
    return (
      <div>
        {firstName}
        {lastName}
        {Email}
        {pNumber}
      </div>
    );
  }
}

export default PersonalPreview;
