import React, { Component } from "react";

class PracticalPreview extends Component {
  render() {
    const info = { ...this.props.practicalInfo };
    const { position, company, city, from, to } = info;
    return (
      <div>
        {position}
        {company}
        {city}
        {from}
        {to}
      </div>
    );
  }
}

export default PracticalPreview;
