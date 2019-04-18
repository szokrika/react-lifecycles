import React from "react";
import ReactDOM from "react-dom";

import MyClass from "./MyClass";

import "./styles.css";

class App extends React.Component {
  state = { name: "Name from prop" };

  handleClick = () => {
    this.setState({ name: "Updated name" });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button onClick={this.handleClick}>Click to update name</button>
        <h2>Start editing to see some magic happen!</h2>
        <MyClass name={this.state.name} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
