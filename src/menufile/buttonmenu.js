import React from "react";

export default class ButtonMenu extends React.Component {
  render() {
    return (
      <button
        style={{
          backgroundColor: "Transparent",
          height: this.props.height / 6,
          float: "right",
          padding: this.props.height / 20,
          border: "none",
          color: "white",
          fontSize: this.props.height / 30,
        }}
        onClick={this.props.clickFun}
      >
        {this.props.label}
      </button>
    );
  }
}
