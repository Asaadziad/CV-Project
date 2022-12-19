import React, { Component } from "react";
import PersonalComponenet from "./PersonalComponent";
import Preview from "../preview/Preview";

class Personal extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      pNumber: "",
    };
    this.isSubmitted = false;
  }
  handleChange = (e) => {
    this.setState({
      firstName:
        e.target.id === "firstName" ? e.target.value : this.state.firstName,
      lastName:
        e.target.id === "lastName" ? e.target.value : this.state.lastName,
      Email: e.target.id === "Email" ? e.target.value : this.state.Email,
      pNumber: e.target.id === "pNumber" ? e.target.value : this.state.pNumber,
    });
  };
  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.isSubmitted = true;
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      Email: this.state.Email,
      pNumber: this.state.pNumber,
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitPersonal}>
        <PersonalComponenet
          id="firstName"
          name="First name"
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <PersonalComponenet
          id="lastName"
          name="Last name"
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <PersonalComponenet
          id="Email"
          name="Email"
          type="text"
          value={this.state.Email}
          onChange={this.handleChange}
        />
        <PersonalComponenet
          id="pNumber"
          name="Phone number"
          type="text"
          value={this.state.pNumber}
          onChange={this.handleChange}
        />

        <Preview data={this.state} />
        <button onClick={this.submitClicked}>Add</button>
      </form>
    );
  }
}

export default Personal;
