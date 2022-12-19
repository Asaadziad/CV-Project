import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Phone number:
          <input type="text" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Education;
