import React, { Component } from "react";

class PracticalPreview extends Component {
  render() {
    const info = { ...this.props.practicalInfo };
    const { position, company, city, from, to } = info;
    return (
      <div className="mb-3 mt-1">
        <h2 className="itemTitle">Experience</h2>
        <div className="itemBody">
          <div>
            {from} - {to}
          </div>
          <div>
            <h3>{position}</h3>
            <p>
              {company}, {city}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticalPreview;
