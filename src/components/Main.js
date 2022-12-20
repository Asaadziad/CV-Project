import React, { Component } from "react";
import Education from "./forms/Education";
import Personal from "./forms/Personal";
import Practical from "./forms/Practical";
import CVPreview from "./preview/CVPreview";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        Email: "",
        pNumber: "",
      },
      practical: {
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
      education: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    };
  }

  handleChange = (e) => {
    const { personal, practical } = this.state;
    this.setState({
      personal: {
        firstName:
          e.target.id === "firstName" ? e.target.value : personal.firstName,
        lastName:
          e.target.id === "lastName" ? e.target.value : personal.lastName,
        Email: e.target.id === "Email" ? e.target.value : personal.Email,
        pNumber: e.target.id === "pNumber" ? e.target.value : personal.pNumber,
      },
      practical: {
        position:
          e.target.id === "Position" ? e.target.value : practical.position,
        company: e.target.id === "Company" ? e.target.value : practical.company,
        city: e.target.id === "City" ? e.target.value : practical.city,
        from: e.target.id === "From" ? e.target.value : practical.from,
        to: e.target.id === "To" ? e.target.value : practical.to,
      },
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { personal, practical } = this.state;
    this.setState({
      personal: {
        firstName: personal.firstName,
        lastName: personal.lastName,
        Email: personal.Email,
        pNumber: personal.pNumber,
      },
      practical: {
        position: practical.position,
        company: practical.company,
        city: practical.city,
        from: practical.from,
        to: practical.to,
      },
    });
  };
  render() {
    const { personal, practical } = this.state;
    return (
      <div>
        <Personal
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
          dataValue={personal}
        />
        <Practical
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
          dataValue={practical}
        />
        <Education />

        <CVPreview personalInfo={personal} practicalInfo={practical} />
      </div>
    );
  }
}

export default Main;
