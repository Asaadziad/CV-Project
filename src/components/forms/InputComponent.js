import React, { Component } from "react";

class InputComponenet extends Component {
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          placeholder={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          className="mb-2"
        />
      </div>
    );
  }
}

export default InputComponenet;
