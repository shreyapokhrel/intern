import React, { Component } from 'react';

class ClassGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>Hello, {this.state.name || "Guest"}!</p>
      </div>
    );
  }
}

export default ClassGreeting;
