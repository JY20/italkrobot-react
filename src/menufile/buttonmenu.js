import React from "react";
import { Link, Router, BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Events from "../eventsfile/events";

export default class ButtonMenu extends React.Component {
  render() {
    return (
      <Button
        renderAs="button"
        style={{
          backgroundColor: "Transparent",
          height: this.props.width / 12,
          float: "right",
          padding: this.props.width / 40,
          border: "none",
          color: "white",
          fontSize: this.props.width / 60,
        }}
      >
        <span>{this.props.label}</span>
      </Button>
    );
  }
}
