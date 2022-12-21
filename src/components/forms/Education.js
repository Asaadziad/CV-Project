import React, { Component } from "react";
import InputComponenet from "./InputComponent";

class Education extends Component {
  render() {
    const data = { ...this.props.dataValue };
    const inputNames = [
      ["universityName", "University name"],
      ["CityEdu", "City"],
      ["Degree", "Degree"],
      ["Subject", "Subject"],
      ["FromEdu", "From"],
      ["ToEdu", "To"],
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
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Education;
