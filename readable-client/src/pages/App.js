import React, { Component } from "react";
import AppContainer from "../containers/AppContainer";
import Switch from "react-router-dom/Switch";

export default class App extends Component {
  render() {
    return <AppContainer> {this.props.children} </AppContainer>;
  }
}
