import React from "react";
import Logo from "../images/icons/facebook.png";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      links: [
        "https://www.facebook.com/iTalkRobot/",
        "https://www.instagram.com/italkrobot/",
        "https://twitter.com/italkrobot",
      ],
      icons: [Logo],
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <header style={{ fontSize: this.props.width / 10 }}>
            Contact Us
          </header>
          <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <p>{this.state.value}</p>
          <br />
        </form>
        <section>
          <header style={{ float: "left", fontSize: this.props.width / 60 }}>
            Follow Us
          </header>
          <br />
          <a href={this.state.links[0]}>
            <img
              style={{ width: this.props.width / 30, float: "left" }}
              src={this.state.icons[0]}
            />
          </a>
        </section>
      </div>
    );
  }
}

export default Contact;
