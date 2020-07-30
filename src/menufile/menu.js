import React, { useState } from "react";
import Logo from "c:/Users/Jimmy/italkrobot-react/src/images/Logo.png";
import ButtonMenu from "./buttonmenu";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Eventsvis: true,
    };
  }

  eventsH(part) {
    console.log("Click happened");
  }
  render() {
    return (
      <section
        style={{
          backgroundColor: "#252525",
          width: this.props.width * 0.98,
          height: this.props.height / 6,
        }}
      >
        <ButtonMenu
          label="Contact Us"
          height={this.props.height}
          clickFun={this.eventsH}
        />
        <ButtonMenu label="Products" height={this.props.height} />
        <ButtonMenu label="Projects" height={this.props.height} />
        <ButtonMenu label="Events" height={this.props.height} />
        <ButtonMenu label="Home" height={this.props.height} />
        <img
          style={{
            height: this.props.height / 7,
            float: "left",
            paddingTop: (this.props.height / 6 - this.props.height / 7) / 2,
            paddingLeft: this.props.width / 50,
          }}
          src={Logo}
        />
      </section>
    );
  }
}

export default Menu;
