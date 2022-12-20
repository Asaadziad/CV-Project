import React, { Component } from "react";
import InputComponenet from "./InputComponent";

class Practical extends Component {
  render() {
    const data = { ...this.props.dataValue };
    return (
      <form onSubmit={this.props.onSubmit}>
        <InputComponenet
          id="Position"
          name="Position"
          type="text"
          value={data.position}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="Company"
          name="Company"
          type="text"
          value={data.company}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="City"
          name="City"
          type="text"
          value={data.city}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="From"
          name="From"
          type="text"
          value={data.from}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="To"
          name="To"
          type="text"
          value={data.to}
          onChange={this.props.onChange}
        />

        <button>Add</button>
      </form>
    );
  }
}

export default Practical;
