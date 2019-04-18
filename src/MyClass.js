import React, { Component } from "react";

export default class MyClass extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Me" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    console.log("will mount!");
  }

  componentDidMount() {
    console.log("mounted!");
  }

  componentWillReceiveProps() {
    console.log("will receive props!");
  }

  componentWillUpdate() {
    console.log("will update!");
  }

  componentDidUpdate() {
    console.log("updated!");
  }

  componentWillUnmount() {
    console.log("unmounted!");
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div style={{ border: "1px solid palevioletred" }}>
        <p>State: {this.state.name}</p>
        <p>Prop: {this.props.name}</p>

        <select onChange={this.handleChange}>
          <option>You</option>
          <option>Me</option>
          <option>Us</option>
          <option>Them</option>
        </select>
      </div>
    );
  }
}
