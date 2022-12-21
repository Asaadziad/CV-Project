import React, { Component } from "react";
import InputComponenet from "./InputComponent";

class Personal extends Component {
  render() {
    const data = { ...this.props.dataValue };
    const inputNames = [
      ["firstName", "First name"],
      ["lastName", "Last name"],
      ["Email", "Email"],
      ["pNumber", "Phone number"],
    ];

    return (
      <div className="container formContainer mb-3 mt-3">
        <form onSubmit={this.props.onSubmit}>
          {inputNames.map((item) => {
            return (
              <InputComponenet
                id={item[0]}
                name={item[1]}
                type="text"
                value={data[item[0]]}
                onChange={this.props.onChange}
              />
            );
          })}
        </form>
      </div>
    );
  }
}

export default Personal;
