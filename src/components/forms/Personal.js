import React, { Component } from "react";
import InputComponenet from "./InputComponent";

class Personal extends Component {
  render() {
    const data = { ...this.props.dataValue };
    return (
      <form onSubmit={this.props.onSubmit}>
        <InputComponenet
          id="firstName"
          name="First name"
          type="text"
          value={data.firstName}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="lastName"
          name="Last name"
          type="text"
          value={data.lastName}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="Email"
          name="Email"
          type="text"
          value={data.Email}
          onChange={this.props.onChange}
        />
        <InputComponenet
          id="pNumber"
          name="Phone number"
          type="text"
          value={data.pNumber}
          onChange={this.props.onChange}
        />

        <button>Add</button>
      </form>
    );
  }
}

export default Personal;
