import React, { Component, PureComponent } from "react";
import ReactDOM from "@react-dom";
// import { render } from "react-dom";
class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click....')
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  componentDidUpdate() {}

  render() {
    return [
      <button key="1" onClick={this.handleClick}>
        Update counter
      </button>,
      <span key="2">{this.state.count}</span>,
    ];
  }
}
// debugger;

ReactDOM.render(<ClickCounter />, document.getElementById("root"));
