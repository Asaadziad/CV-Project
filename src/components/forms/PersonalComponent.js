import React, { Component } from "react";

class PersonalComponenet extends Component {
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          placeholder={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default PersonalComponenet;
